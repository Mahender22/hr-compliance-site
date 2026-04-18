export default function McpPage() {
  const tools = [
    { name: "get_minimum_wage", summary: "State minimum wage + local variations." },
    { name: "get_overtime_rules", summary: "Overtime thresholds, multiplier, exemptions." },
    { name: "get_pay_frequency", summary: "How often employers must pay (weekly/bi-weekly/monthly)." },
    { name: "get_pay_transparency", summary: "Salary-range posting rules + penalties." },
    { name: "get_sick_leave", summary: "Accrual rate, cap, carryover, eligible employers." },
    { name: "get_family_leave", summary: "State FMLA variants, job protection, paid vs unpaid." },
    { name: "get_vacation_policy", summary: "Use-it-or-lose-it legality, PTO payout on termination." },
    { name: "get_voting_leave", summary: "Paid/unpaid time off to vote." },
    { name: "get_bereavement_leave", summary: "Mandatory bereavement leave rules." },
    { name: "get_discrimination_law", summary: "Protected classes beyond federal Title VII." },
    { name: "get_background_check_rules", summary: "Ban-the-box, consent, disclosure requirements." },
    { name: "get_drug_testing_rules", summary: "Pre-employment, random, post-accident legality." },
    { name: "get_noncompete_rules", summary: "Enforceability, income thresholds, blue-pencil rules." },
    { name: "get_safety_requirements", summary: "State OSHA variants, poster requirements." },
    { name: "get_recent_changes", summary: "Laws changed in the last N days." },
    { name: "get_compliance_calendar", summary: "Upcoming effective dates by date range." },
    { name: "compare_states", summary: "Diff two states on any topic." },
    { name: "search_employment_law", summary: "Full-text search across all data." },
    { name: "get_state_summary", summary: "Everything on file for one state." },
  ];

  return (
    <div className="mx-auto max-w-[1120px] px-6 py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">MCP server</h1>
      <p className="mt-4 max-w-[640px] text-xl text-ink-soft">
        Open source. Free to self-host. Works anywhere MCP does.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Install</h2>
        <div className="mt-4 rounded-xl border border-line bg-white p-6 font-mono text-[13px] leading-relaxed">
          <div className="text-muted"># pick your installer</div>
          <div>pip install hr-compliance-mcp</div>
          <div className="mt-3 text-muted"># or pin via uv / poetry / pipx</div>
          <div>uvx hr-compliance-mcp</div>
        </div>

        <div className="mt-6 rounded-xl border border-line bg-white p-6 font-mono text-[13px] leading-relaxed">
          <div className="text-muted"># claude_desktop_config.json</div>
          <pre className="whitespace-pre-wrap text-ink">{`{
  "mcpServers": {
    "hr-compliance": {
      "command": "python",
      "args": ["-m", "hr_compliance_mcp"]
    }
  }
}`}</pre>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Tools</h2>
        <p className="mt-2 text-ink-soft">Nineteen tools, typed inputs and outputs, no hidden state.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {tools.map((t) => (
            <div key={t.name} className="rounded-lg border border-line bg-white p-4">
              <div className="font-mono text-[13px] text-ink">{t.name}</div>
              <div className="mt-1 text-[14px] text-ink-soft">{t.summary}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Honest limitations</h2>
        <ul className="mt-3 space-y-2 text-[15px] text-ink-soft">
          <li>· 8 states today. The remaining 42 + DC are on the public roadmap.</li>
          <li>· Federal-only questions return a pointer to DOL, not a synthesized answer.</li>
          <li>· Local ordinances (city/county) are partial — NYC, SF, Seattle, Austin covered first.</li>
          <li>· Data is refreshed monthly. Change-log feed ships with the Pro tier.</li>
        </ul>
      </section>
    </div>
  );
}
