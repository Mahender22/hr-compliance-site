export default function WaitlistPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-20">
      <h1 className="font-display text-5xl font-semibold tracking-tight">REST API waitlist</h1>
      <p className="mt-4 text-xl text-ink-soft">
        The MCP server is free and open source. The REST API is the paid surface for teams that
        need HTTP access, usage-based billing, SLAs, and webhooks when state laws change.
      </p>

      <form
        className="mt-10 flex flex-col gap-3"
        action="https://formspree.io/f/replace-with-real-endpoint"
        method="POST"
      >
        <label className="text-[14px] font-medium text-ink-soft">
          Work email
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-1 w-full rounded-md border border-line bg-white px-4 py-2.5 outline-none focus:border-ink"
          />
        </label>
        <label className="text-[14px] font-medium text-ink-soft">
          What would you use it for? (optional)
          <textarea
            name="use_case"
            rows={3}
            placeholder="e.g. compliance checks in our ATS, multi-state payroll onboarding"
            className="mt-1 w-full rounded-md border border-line bg-white px-4 py-2.5 outline-none focus:border-ink"
          />
        </label>
        <button
          type="submit"
          className="mt-2 self-start rounded-md bg-accent px-5 py-2.5 text-white hover:bg-accent-hover"
        >
          Join the waitlist
        </button>
      </form>

      <div className="mt-16 rounded-xl border border-line bg-white p-6">
        <h2 className="font-display text-xl font-semibold">Planned tiers</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          <Tier name="Starter" price="$49" queries="1,000 / mo" extras="10 priority states, wage/hour + leave only" />
          <Tier name="Pro" price="$99" queries="5,000 / mo" extras="All 50 states + DC, all categories, change-log feed" />
          <Tier name="Business" price="$199" queries="25,000 / mo" extras="Webhook alerts, multi-tenant, SLA" />
        </div>
        <p className="mt-4 text-[13px] text-muted">
          Prices are preliminary. Early waitlist signups lock the launch rate.
        </p>
      </div>
    </div>
  );
}

function Tier({ name, price, queries, extras }: { name: string; price: string; queries: string; extras: string }) {
  return (
    <div className="rounded-lg border border-line bg-canvas p-4">
      <div className="font-display text-lg font-semibold">{name}</div>
      <div className="mt-1 font-mono text-[13px] text-muted">{price}/mo · {queries}</div>
      <div className="mt-2 text-[13px] text-ink-soft">{extras}</div>
    </div>
  );
}
