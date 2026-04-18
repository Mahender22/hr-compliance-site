import { LiveDemo } from "@/components/LiveDemo";
import { COVERED_STATES, PAY_TRANSPARENCY } from "@/lib/rules";

export default function Home() {
  return (
    <>
      <Hero />
      <DemoSection />
      <WhatItIs />
      <Coverage />
      <ForDevelopers />
      <Waitlist />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pt-24 pb-20">
      <div className="max-w-[720px]">
        <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Query US employment law by state.
        </h1>
        <p className="mt-6 text-xl text-ink-soft">
          Open source MCP server. 19 tools, {COVERED_STATES.length} states live, 42 in pipeline.
          Paste a job posting below. See what it gets wrong.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#demo"
            className="rounded-md bg-accent px-5 py-2.5 text-white hover:bg-accent-hover"
          >
            Try the demo
          </a>
          <a
            href="/mcp"
            className="rounded-md border border-line px-5 py-2.5 text-ink hover:border-ink"
          >
            Install in 30 seconds
          </a>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="mx-auto max-w-[1120px] px-6 pb-24">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Pay-transparency check</h2>
        <span className="text-[13px] text-muted">Runs in your browser. No data leaves your device.</span>
      </div>
      <LiveDemo />
    </section>
  );
}

function WhatItIs() {
  const cards = [
    {
      title: "MCP server",
      status: "Live",
      badge: "live",
      body: "19 tools across wage & hour, leave, discrimination, background checks, noncompetes, safety. Open source, MIT. Install in any MCP client.",
      href: "/mcp",
    },
    {
      title: "REST API",
      status: "Soon",
      badge: "soon",
      body: "Same data, HTTP/JSON surface. Starter $49/mo, Pro $99/mo. Change-log feed on Pro. Self-hosted enterprise tier for teams that need SLAs.",
      href: "/waitlist",
    },
    {
      title: "Skill Pack",
      status: "Soon",
      badge: "soon",
      body: "Claude Code SKILL.md bundle with pre-baked workflows: audit a posting, compare states, build a compliance calendar. Drops into any Claude Code agent.",
      href: "/waitlist",
    },
  ];
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1120px] px-6 py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Three surfaces, one data layer.</h2>
        <p className="mt-3 max-w-[640px] text-ink-soft">
          Same 50-state compliance data, packaged three ways. Built so the MCP server gets wide dev
          distribution while the API funds the work of keeping it current.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-xl border border-line bg-canvas p-6 transition hover:border-ink"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <StatusBadge kind={c.badge as "live" | "soon"}>{c.status}</StatusBadge>
              </div>
              <p className="mt-3 text-[15px] text-ink-soft">{c.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ kind, children }: { kind: "live" | "soon"; children: React.ReactNode }) {
  const cls =
    kind === "live"
      ? "bg-success/10 text-success border-success/20"
      : "bg-canvas text-muted border-line";
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase ${cls}`}>
      {children}
    </span>
  );
}

function Coverage() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-24">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Coverage</h2>
        <a href="/states" className="text-[14px] text-accent hover:underline">
          See all 51 jurisdictions →
        </a>
      </div>
      <p className="mt-3 max-w-[640px] text-ink-soft">
        Eight priority states live today. Selection was driven by query volume + pay-transparency
        law density, not population. The remaining 42 states and DC are on the roadmap.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Object.values(PAY_TRANSPARENCY).map((r) => (
          <div
            key={r.state}
            className="rounded-lg border border-line bg-white p-4"
          >
            <div className="flex items-baseline justify-between">
              <div className="font-display text-lg font-semibold">{r.stateName}</div>
              <span className="rounded-full border border-success/20 bg-success/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-success">
                Live
              </span>
            </div>
            <div className="mt-1 text-[13px] text-muted">
              Effective {r.effectiveDate} · {r.employerThreshold}+ employees
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ForDevelopers() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">For developers</h2>
          <p className="mt-3 text-ink-soft">
            Drop into Claude Desktop, Cursor, Continue, or any MCP client. Every tool is typed,
            tested, and returns structured data — not prose.
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-ink-soft">
            <li>· 19 tools, 2 resources</li>
            <li>· 63 tests, CI green</li>
            <li>· MIT licensed</li>
            <li>· No telemetry, no API keys required for MCP tier</li>
          </ul>
          <div className="mt-6">
            <a
              href="https://github.com/"
              className="rounded-md border border-line px-4 py-2 text-[14px] hover:border-ink"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-line bg-canvas p-5 font-mono text-[13px] leading-relaxed">
          <div className="text-muted"># 1. install</div>
          <div>pip install hr-compliance-mcp</div>
          <div className="mt-4 text-muted"># 2. add to claude_desktop_config.json</div>
          <pre className="whitespace-pre-wrap text-ink">{`{
  "mcpServers": {
    "hr-compliance": {
      "command": "python",
      "args": ["-m", "hr_compliance_mcp"]
    }
  }
}`}</pre>
          <div className="mt-4 text-muted"># 3. ask anything</div>
          <div className="text-ink">Is my Colorado job posting compliant?</div>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-24 text-center">
      <h2 className="font-display text-3xl font-semibold tracking-tight">
        The REST API is coming.
      </h2>
      <p className="mt-3 text-ink-soft">
        Same data, HTTP surface, webhook alerts when state laws change. Drop your email to get
        notified when the Starter tier opens.
      </p>
      <form
        action="/waitlist"
        method="get"
        className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
      >
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-md border border-line bg-white px-4 py-2.5 outline-none focus:border-ink sm:w-[320px]"
        />
        <button
          type="submit"
          className="rounded-md bg-accent px-5 py-2.5 text-white hover:bg-accent-hover"
        >
          Notify me
        </button>
      </form>
      <p className="mt-3 text-[13px] text-muted">No spam. One email when the API ships.</p>
    </section>
  );
}
