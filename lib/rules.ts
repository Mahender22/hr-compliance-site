export type PayTransparencyRule = {
  state: string;
  stateName: string;
  requiresPosting: boolean;
  requiresOnRequest: boolean;
  requiresBenefitsDescription: boolean;
  employerThreshold: number;
  effectiveDate: string;
  penalties: string;
  citation: string;
};

export const PAY_TRANSPARENCY: Record<string, PayTransparencyRule> = {
  CA: {
    state: "CA",
    stateName: "California",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: false,
    employerThreshold: 15,
    effectiveDate: "2023-01-01",
    penalties: "$100-$10,000 per violation",
    citation: "Cal. Lab. Code § 432.3",
  },
  NY: {
    state: "NY",
    stateName: "New York",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: false,
    employerThreshold: 4,
    effectiveDate: "2023-09-17",
    penalties: "Up to $1,000 first violation, $5,000 subsequent",
    citation: "N.Y. Lab. Law § 194-b",
  },
  CO: {
    state: "CO",
    stateName: "Colorado",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: true,
    employerThreshold: 1,
    effectiveDate: "2021-01-01",
    penalties: "$500-$10,000 per violation",
    citation: "C.R.S. § 8-5-201",
  },
  WA: {
    state: "WA",
    stateName: "Washington",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: true,
    employerThreshold: 15,
    effectiveDate: "2023-01-01",
    penalties: "Up to $500 first violation, $1,000+ repeat",
    citation: "RCW 49.58.110",
  },
  MA: {
    state: "MA",
    stateName: "Massachusetts",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: false,
    employerThreshold: 25,
    effectiveDate: "2025-07-31",
    penalties: "Warning first, then $500-$25,000",
    citation: "M.G.L. c. 149, § 105F",
  },
  IL: {
    state: "IL",
    stateName: "Illinois",
    requiresPosting: true,
    requiresOnRequest: false,
    requiresBenefitsDescription: true,
    employerThreshold: 15,
    effectiveDate: "2025-01-01",
    penalties: "$500 first, $2,500-$10,000 repeat",
    citation: "820 ILCS 112/10",
  },
  NJ: {
    state: "NJ",
    stateName: "New Jersey",
    requiresPosting: false,
    requiresOnRequest: true,
    requiresBenefitsDescription: false,
    employerThreshold: 10,
    effectiveDate: "2025-06-01",
    penalties: "$1,000 first, up to $10,000 subsequent",
    citation: "N.J.S.A. 34:6B-1",
  },
  OR: {
    state: "OR",
    stateName: "Oregon",
    requiresPosting: true,
    requiresOnRequest: true,
    requiresBenefitsDescription: false,
    employerThreshold: 1,
    effectiveDate: "2024-01-01",
    penalties: "$1,000 per violation",
    citation: "ORS 652.220",
  },
};

export const COVERED_STATES = Object.keys(PAY_TRANSPARENCY);

export const ALL_US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
  "DC",
];
