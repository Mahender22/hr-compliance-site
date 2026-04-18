"use client";

import { useMemo, useState } from "react";
import { checkPosting } from "@/lib/checker";
import { PAY_TRANSPARENCY } from "@/lib/rules";

const SAMPLE = {
  title: "Senior Backend Engineer",
  state: "CA",
  salaryMin: "",
  salaryMax: "",
  employerSize: "200",
  includesBenefits: false,
};

export function LiveDemo() {
  const [title, setTitle] = useState(SAMPLE.title);
  const [state, setState] = useState(SAMPLE.state);
  const [salaryMin, setSalaryMin] = useState(SAMPLE.salaryMin);
  const [salaryMax, setSalaryMax] = useState(SAMPLE.salaryMax);
  const [employerSize, setEmployerSize] = useState(SAMPLE.employerSize);
  const [includesBenefits, setIncludesBenefits] = useState(SAMPLE.includesBenefits);

  const report = useMemo(() => {
    return checkPosting({
      title,
      state,
      salaryMin: salaryMin === "" ? null : Number(salaryMin),
      salaryMax: salaryMax === "" ? null : Number(salaryMax),
      employerSize: employerSize === "" ? 0 : Number(employerSize),
      includesBenefits,
    });
  }, [title, state, salaryMin, salaryMax, employerSize, includesBenefits]);

  const errorCount = report.violations.filter((v) => v.severity === "error").length;
  const warnCount = report.violations.filter((v) => v.severity === "warn").length;

  return (
    <div className="grid gap-6 rounded-xl border border-line bg-white p-6 md:grid-cols-2 md:gap-10 md:p-10">
      <div className="space-y-5">
        <div>
          <Label>Job title</Label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 outline-none focus:border-ink"
          />
        </div>

        <div>
          <Label>State</Label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 outline-none focus:border-ink"
          >
            {Object.values(PAY_TRANSPARENCY).map((r) => (
              <option key={r.state} value={r.state}>
                {r.stateName} ({r.state})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Salary min ($)</Label>
            <input
              type="number"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
              placeholder="—"
              className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 outline-none focus:border-ink"
            />
          </div>
          <div>
            <Label>Salary max ($)</Label>
            <input
              type="number"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
              placeholder="—"
              className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 outline-none focus:border-ink"
            />
          </div>
        </div>

        <div>
          <Label>Employer size (headcount)</Label>
          <input
            type="number"
            value={employerSize}
            onChange={(e) => setEmployerSize(e.target.value)}
            className="mt-1 w-full rounded-md border border-line bg-canvas px-3 py-2 outline-none focus:border-ink"
          />
        </div>

        <label className="flex items-center gap-3 text-[15px] text-ink-soft">
          <input
            type="checkbox"
            checked={includesBenefits}
            onChange={(e) => setIncludesBenefits(e.target.checked)}
            className="h-4 w-4 rounded border-line"
          />
          Posting includes a benefits description
        </label>
      </div>

      <div className="space-y-4">
        <div
          className={`rounded-lg border p-4 ${
            report.passes
              ? "border-success/30 bg-success/5"
              : "border-error/30 bg-error/5"
          }`}
        >
          <div className="flex items-baseline justify-between">
            <div className="font-display text-lg font-semibold">
              {report.passes ? "Compliant" : `${errorCount} violation${errorCount === 1 ? "" : "s"}`}
            </div>
            <div className="text-[13px] text-muted">{report.stateName}</div>
          </div>
          {!report.passes && (
            <div className="mt-1 text-[14px] text-error">
              This posting would expose the employer to {report.rule?.penalties.toLowerCase()}.
            </div>
          )}
          {warnCount > 0 && (
            <div className="mt-1 text-[13px] text-warn">
              {warnCount} soft warning{warnCount === 1 ? "" : "s"} below.
            </div>
          )}
        </div>

        <ul className="space-y-3">
          {report.violations.length === 0 && (
            <li className="rounded-md border border-line p-4 text-[14px] text-muted">
              No issues. This posting meets {report.stateName} disclosure requirements.
            </li>
          )}
          {report.violations.map((v, i) => (
            <li
              key={i}
              className={`rounded-md border p-4 text-[14px] ${
                v.severity === "error"
                  ? "border-error/30 bg-error/5"
                  : v.severity === "warn"
                    ? "border-warn/30 bg-warn/5"
                    : "border-line bg-canvas"
              }`}
            >
              <div className="font-medium text-ink">{v.rule}</div>
              <div className="mt-1 text-[13px] text-muted">
                {v.citation} · {v.penalty}
              </div>
            </li>
          ))}
        </ul>

        {report.rule && (
          <div className="rounded-md border border-line bg-canvas p-4 text-[13px] text-muted">
            <span className="text-ink-soft">Rule:</span> {report.rule.stateName} —
            employer threshold {report.rule.employerThreshold}+, effective{" "}
            {report.rule.effectiveDate}.
          </div>
        )}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[13px] font-medium text-ink-soft">{children}</label>;
}
