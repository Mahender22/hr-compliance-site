# hr-compliance-site

Marketing + demo site for the HR Compliance MCP stack.

Next.js 15 App Router, Tailwind 4, zero backend. The compliance logic runs in the browser — rules are ported from `hr_compliance_mcp/src/wages.py` into `lib/rules.ts`.

## Dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy

Vercel free tier. Connect the repo, set the domain, done.

## Routes

- `/` — hero, live pay-transparency demo, coverage, dev install, waitlist
- `/mcp` — MCP install + tools list + honest limitations
- `/states` — 51-jurisdiction coverage table
- `/waitlist` — REST API waitlist + planned tiers

## Where the rule data comes from

`lib/rules.ts` is a hand-port of `hr_compliance_mcp/src/wages.py :: PAY_TRANSPARENCY_DATA`. When that module is updated, re-port. Do not import dynamically; the drift is acceptable and the security posture (zero server) matters more than DRY.

## Launch checklist

See `LAUNCH.md` in the adjacent `hr-compliance-mcp/` repo for the coordinated launch plan.
