# hr-compliance-site

[![Next.js 15](https://img.shields.io/badge/next.js-15-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-5-blue.svg)](https://www.typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/tailwind-4-06b6d4.svg)](https://tailwindcss.com)

Marketing + interactive-demo site for the [HR Compliance MCP](https://github.com/Mahender22/hr-compliance-mcp) stack.

The homepage runs a live pay-transparency check entirely in the browser — paste a job posting, get a pass/fail verdict with the exact statute and penalty range. The compliance rules are a hand-port of `hr_compliance_mcp/src/wages.py` into TypeScript, so there's no backend to keep alive and no data leaves the visitor's device.

---

## What's on it

- `/` — hero, interactive pay-transparency demo, coverage, dev install, REST-API waitlist
- `/mcp` — MCP install guide, 19 tools list, honest limitations
- `/states` — 51-jurisdiction coverage table
- `/waitlist` — REST API waitlist + planned tiers

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS 4 (inline `@theme`, no config file)
- Zero backend. Every interactive piece runs client-side.
- Deploys to Vercel free tier.

## Dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production

```bash
npm run build
npm start
```

Or push to `main` with the Vercel GitHub integration and it's live.

## Where the rule data comes from

`lib/rules.ts` is a deliberate, manual port of `PAY_TRANSPARENCY_DATA` in [hr-compliance-mcp](https://github.com/Mahender22/hr-compliance-mcp)'s `wages.py` — same states, same thresholds, same citations, same penalties. When that module changes, re-port. Don't fetch rules dynamically at runtime; the zero-server posture is the point.

## License

[MIT](LICENSE).
