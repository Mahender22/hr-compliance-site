# Deploy

End-to-end checklist for getting this site live on a custom domain. Internal — keep it honest, no marketing prose.

## Prereqs

- Cloudflare account (free)
- Vercel account (free signup, then upgrade to Pro)
- Formspree account (free; 50 submissions/mo)
- The repo pushed to `github.com/Mahender22/hr-compliance-site` (already done)

## 1. Domain

1. Sign in to Cloudflare → **Domain Registration → Register Domains**
2. Search `hrcompliance.dev` (≈ $11–15/yr at-cost). Buy.
3. Skip the upsells (Cloudflare Registrar is at-cost; ignore SSL/email/etc add-ons — Cloudflare provides them free downstream).

## 2. Vercel Pro

1. Sign up at vercel.com with the GitHub account that owns the site repo.
2. Settings → **Plans** → upgrade to **Pro** ($20/mo).
3. Settings → **Spend Management** → set hard cap to **$50/mo**. This protects against viral-traffic bill shock; if the cap is hit, the project pauses instead of charging.

## 3. Project import

1. Vercel dashboard → **Add New → Project**
2. Import `Mahender22/hr-compliance-site`
3. Framework preset: **Next.js** (auto-detected)
4. Root directory: leave blank (the repo root is the Next app)
5. Don't deploy yet — set env vars first.

## 4. Environment variables

In the project's **Settings → Environment Variables**, add for **Production**:

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://hrcompliance.dev` |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | Formspree form URL — see step 5 |

Also add the same vars to **Preview** (so PR previews work). For Preview, the site URL can be the Vercel preview pattern like `https://hr-compliance-site-git-{branch}-{user}.vercel.app` — or just leave it as the production URL; canonical metadata is the only thing it affects.

## 5. Formspree form

1. formspree.io → **New Form** → name it "HR Compliance API waitlist"
2. Copy the form endpoint, e.g. `https://formspree.io/f/abc12345`
3. Paste into Vercel env var `NEXT_PUBLIC_WAITLIST_ENDPOINT`
4. In Formspree's form settings:
   - **After submission redirect**: `https://hrcompliance.dev/waitlist?thanks=1`
   - **Notification emails**: your inbox
   - Optional: enable reCAPTCHA if you start getting bot signups

## 6. First deploy

1. Vercel project → **Deployments → Redeploy** (so the env vars take effect on the first build)
2. Wait for the build (≈ 30s for this site)
3. Open the `.vercel.app` URL Vercel gives you. Verify:
   - All 4 routes load: `/`, `/mcp`, `/states`, `/waitlist`
   - The pay-transparency demo works (try CA with no salary range — should show 1 violation)
   - The waitlist form submits to Formspree (test with your own email)
   - OG image renders at `/opengraph-image` (paste the URL into a Slack DM or https://opengraph.xyz to preview the unfurl)

## 7. Custom domain

1. Vercel project → **Settings → Domains** → add `hrcompliance.dev`
2. Vercel will tell you to add an `A` record (`76.76.21.21`) and a `CNAME` for `www`.
3. In Cloudflare DNS for `hrcompliance.dev`:
   - Add `A` record: `@` → `76.76.21.21`, **DNS only** (gray cloud — Vercel handles its own SSL/CDN)
   - Add `CNAME` record: `www` → `cname.vercel-dns.com`, **DNS only**
4. Back in Vercel, wait ≈ 60s for DNS to propagate. The domain status goes from "Invalid" to "Valid Configuration".
5. SSL cert provisions automatically (Let's Encrypt via Vercel).

## 8. Email forwarding (optional, free)

For an `info@hrcompliance.dev` or `waitlist@hrcompliance.dev` address that forwards to your Gmail:

1. Cloudflare dashboard → `hrcompliance.dev` → **Email → Email Routing** → enable
2. Add a destination address (your personal Gmail, verify the verification email)
3. Add a route: `info@hrcompliance.dev` → your Gmail
4. Cloudflare auto-adds the MX records.

## 9. Pre-launch verification

Before announcing on HN/Reddit, run these checks:

- [ ] `https://hrcompliance.dev` resolves and serves the homepage
- [ ] `https://www.hrcompliance.dev` redirects to the apex (or vice-versa, whichever you set as primary)
- [ ] Lighthouse on `/`, `/mcp`, `/states`, `/waitlist` — all routes ≥ 95 on Performance, Accessibility, Best Practices, SEO
- [ ] OG image preview renders correctly on Slack, Twitter, LinkedIn, iMessage
- [ ] Waitlist form delivers to your inbox via Formspree
- [ ] Favicon renders in browser tab + bookmark
- [ ] `https://hrcompliance.dev/robots.txt` returns text and points at the sitemap
- [ ] `https://hrcompliance.dev/sitemap.xml` returns XML with all 4 routes

## 10. Post-launch

- Vercel Analytics is included with Pro — turn on at **Analytics** in the project sidebar (no extra cost, no config)
- If form submissions exceed 50/mo, upgrade Formspree to Pro ($10/mo) or migrate to a tiny `/api/waitlist` route that posts to Resend/Plunk/Slack
- If state-law data drifts in `hr-compliance-mcp/wages.py`, re-port to `lib/rules.ts` here. There is intentionally no live import to keep the site server-less.

## Cost summary

| Item | When | Cost |
|---|---|---|
| Domain | one-time, annual | ~$15/yr |
| Vercel Pro | monthly | $20/mo |
| Formspree free | as long as <50 submissions/mo | $0 |
| Cloudflare DNS + Email Routing | always | $0 |
| **Total launch-week** | — | **$35** ($20 Pro first month + $15 domain) |
| **Ongoing** | per month | **$20/mo** |
