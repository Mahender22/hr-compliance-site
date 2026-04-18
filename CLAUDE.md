# hr-compliance-site

## What is this
Marketing + interactive-demo site for the HR Compliance MCP stack.

Zero-backend Next.js site at the custom domain (TBD — likely `hrcompliance.dev`). The homepage runs a live pay-transparency check entirely client-side, using rules ported from `hr_compliance_mcp/src/wages.py`. Existence is to funnel launch-day traffic from Show HN / r/mcp / r/ClaudeAI to a URL that makes the product legible in 10 seconds.

## Source opportunity
Companion surface to `C:/GO-CRAZY/hr-compliance-mcp/` (item #1 in `sprint-2026-04-17-v2.md`). This site is what the LAUNCH.md's platform posts link to.

**Why this exists:**
- A live demo doubles Show HN click-through vs. a GitHub link alone
- The pay-transparency check is the viral hook on its own — shareable, concrete, headline-friendly
- Captures launch-day emails on the REST API waitlist so day-1 of the paid tier has an audience

## Who it's for
- **Primary visitor**: Devs landing from r/mcp, r/ClaudeAI, Show HN. They want to see the thing, install in 30 sec, then leave.
- **Secondary visitor**: HR tech founders / recruiters who found the demo link shared. They want the API waitlist.
- **Where they live**: same channels as hr-compliance-mcp (r/mcp, r/ClaudeAI, HN, X #buildinpublic, claudemarketplaces.com)

## Revenue model
The site itself isn't monetized. It's the top of the funnel for:
- Open-source adoption (MCP stars, installs, credibility)
- Waitlist signups → first REST API subscribers when that ships

## Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind v4 (inline @theme, no config file)
- **Deploy**: Vercel free tier
- **Why this stack**: ships in a weekend, free hosting, best-in-class DX, SSR for SEO, client-side interactivity for the demo. No database, no auth, no backend — keeps ops cost at zero and attack surface minimal.

## Directory structure (as-is)

```
hr-compliance-site/
├── app/
│   ├── layout.tsx          # root shell, nav, footer, font loading
│   ├── globals.css         # Tailwind v4 + color tokens
│   ├── page.tsx            # homepage (hero, demo, what-it-is, coverage, dev, waitlist)
│   ├── mcp/page.tsx        # MCP install + tools list
│   ├── states/page.tsx     # 51-jurisdiction coverage table
│   └── waitlist/page.tsx   # REST API waitlist + planned tiers
├── components/
│   └── LiveDemo.tsx        # client component — the interactive check
├── lib/
│   ├── rules.ts            # ported pay-transparency data, 8 states
│   └── checker.ts          # pure checkPosting(p) -> Report
├── CLAUDE.md               # this file
├── README.md
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── .gitignore
```

## How to run
```bash
# install
npm install

# dev server (http://localhost:3000)
npm run dev

# production build
npm run build && npm start
```

## Current state
- Scaffold complete: 4 routes, interactive demo, 8-state coverage table
- Zero backend (all compliance logic client-side)
- Not yet deployed
- No analytics yet (add Plausible post-launch if we want)
- Placeholder GitHub links (replace with real repo URL before launch)
- Placeholder Formspree endpoint on /waitlist

## Next tasks (in priority order)
1. Replace GitHub placeholder URLs in `app/layout.tsx`, `app/page.tsx`, `app/mcp/page.tsx` with the real repo URL once hr-compliance-mcp is public
2. Wire the waitlist form to a real endpoint (Formspree, Plunk, or Resend + a small serverless route)
3. Buy and connect domain (candidates: hrcompliance.dev, employmcp.com)
4. Add OG image + favicon + robots.txt + sitemap.xml before submitting to search
5. Deploy to Vercel, verify Lighthouse ≥ 95 on all 4 routes
6. Add Plausible or Vercel Analytics for launch-day metrics

## Known constraints
- Mahender is on F1 STEM OPT; income flows through professor LLC. Domain registration + Vercel Pro (if needed) goes through the LLC's card.
- No Claude co-author trailers, no "generated with Claude Code" stamps in README, footer, commit messages, or any public-facing surface.
- Rule data is a deliberate copy from hr-compliance-mcp — do NOT try to fetch rules dynamically. The server-less posture is the point.
- If the pay-transparency rules change, re-port from `hr_compliance_mcp/src/wages.py`. This is a handful of lines a few times per year.

## What NOT to touch without explicit ask
- `lib/rules.ts` — drift with hr-compliance-mcp is tracked manually; changing numbers here without updating hr-compliance-mcp would mislead visitors
- Color tokens in `app/globals.css` — chosen to match Anthropic/Claude visual language; ad-hoc changes break the intentional look

## Useful context from the lab
- `C:/GO-CRAZY/CLAUDE.md` — lab-level workspace overview
- `C:/GO-CRAZY/hr-compliance-mcp/` — the product this site is marketing
- `C:/GO-CRAZY/hr-compliance-mcp/hr_compliance_mcp/src/wages.py` — canonical rule data
- `C:/GO-CRAZY/discovery/sprint-2026-04-17-v2.md` — #1 (product), #3 (pay-transparency wedge)
- `C:/Users/mahen/.claude/projects/C--GO-CRAZY-hr-compliance-site/memory/` — copied lab memory
