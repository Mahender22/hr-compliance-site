import { ALL_US_STATES, PAY_TRANSPARENCY } from "@/lib/rules";

const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  DC: "District of Columbia",
};

export default function StatesPage() {
  const covered = new Set(Object.keys(PAY_TRANSPARENCY));
  const liveCount = covered.size;
  const pipelineCount = ALL_US_STATES.length - liveCount;

  return (
    <div className="mx-auto max-w-[1120px] px-6 py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">Coverage</h1>
      <p className="mt-4 max-w-[640px] text-xl text-ink-soft">
        {liveCount} jurisdictions live, {pipelineCount} in the pipeline. Live states cover
        wage & hour, leave, pay transparency, discrimination, background checks, drug testing,
        noncompetes, and safety. Pipeline states are roadmap — scraped quarterly, reviewed before
        publishing.
      </p>

      <div className="mt-12 overflow-hidden rounded-xl border border-line bg-white">
        <table className="w-full text-left text-[14px]">
          <thead className="border-b border-line bg-canvas">
            <tr>
              <th className="px-4 py-3 font-medium text-ink-soft">State</th>
              <th className="px-4 py-3 font-medium text-ink-soft">Code</th>
              <th className="px-4 py-3 font-medium text-ink-soft">Status</th>
              <th className="px-4 py-3 font-medium text-ink-soft">Pay transparency effective</th>
            </tr>
          </thead>
          <tbody>
            {ALL_US_STATES.map((code) => {
              const rule = PAY_TRANSPARENCY[code];
              const isLive = covered.has(code);
              return (
                <tr key={code} className="border-t border-line">
                  <td className="px-4 py-3">{STATE_NAMES[code] ?? code}</td>
                  <td className="px-4 py-3 font-mono text-[13px] text-muted">{code}</td>
                  <td className="px-4 py-3">
                    {isLive ? (
                      <span className="rounded-full border border-success/20 bg-success/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-success">
                        Live
                      </span>
                    ) : (
                      <span className="rounded-full border border-line bg-canvas px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                        Pipeline
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted">
                    {rule ? rule.effectiveDate : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
