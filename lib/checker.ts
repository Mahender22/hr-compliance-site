import { PAY_TRANSPARENCY, type PayTransparencyRule } from "./rules";

export type Severity = "error" | "warn" | "info";

export type Violation = {
  rule: string;
  severity: Severity;
  citation: string;
  penalty: string;
};

export type Posting = {
  state: string;
  title: string;
  salaryMin: number | null;
  salaryMax: number | null;
  employerSize: number;
  includesBenefits: boolean;
};

export type Report = {
  state: string;
  stateName: string;
  covered: boolean;
  passes: boolean;
  violations: Violation[];
  rule: PayTransparencyRule | null;
};

export function checkPosting(p: Posting): Report {
  const rule = PAY_TRANSPARENCY[p.state.toUpperCase()];
  if (!rule) {
    return {
      state: p.state,
      stateName: p.state,
      covered: false,
      passes: true,
      violations: [],
      rule: null,
    };
  }

  const violations: Violation[] = [];

  const belowThreshold = p.employerSize > 0 && p.employerSize < rule.employerThreshold;

  if (rule.requiresPosting && !belowThreshold) {
    const hasRange = p.salaryMin !== null && p.salaryMax !== null && p.salaryMax > p.salaryMin;
    if (!hasRange) {
      violations.push({
        rule: `${rule.stateName} requires a salary range in every public job posting.`,
        severity: "error",
        citation: rule.citation,
        penalty: rule.penalties,
      });
    }

    if (rule.requiresBenefitsDescription && !p.includesBenefits) {
      violations.push({
        rule: `${rule.stateName} also requires a benefits description in the posting.`,
        severity: "error",
        citation: rule.citation,
        penalty: rule.penalties,
      });
    }

    if (p.salaryMin !== null && p.salaryMax !== null && p.salaryMax > p.salaryMin) {
      const spread = (p.salaryMax - p.salaryMin) / p.salaryMin;
      if (spread > 0.5) {
        violations.push({
          rule: `Range is ${Math.round(spread * 100)}% wide. Courts in ${rule.stateName} have flagged excessively broad ranges as non-compliant in spirit, even if technically disclosed.`,
          severity: "warn",
          citation: rule.citation,
          penalty: rule.penalties,
        });
      }
    }
  }

  if (belowThreshold) {
    violations.push({
      rule: `Employer size ${p.employerSize} is below ${rule.stateName}'s ${rule.employerThreshold}-employee threshold. Posting rules don't apply, but on-request disclosure may still.`,
      severity: "info",
      citation: rule.citation,
      penalty: "n/a",
    });
  }

  return {
    state: rule.state,
    stateName: rule.stateName,
    covered: true,
    passes: violations.filter((v) => v.severity === "error").length === 0,
    violations,
    rule,
  };
}
