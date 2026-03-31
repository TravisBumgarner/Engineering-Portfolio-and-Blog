---
name: tb-09-production-readiness-untested
description: Production hardening — SSR for OG tags, environment configs, Heroku/NFS hosting, CI/CD with GitHub Actions, security headers, rate limiting, PostHog analytics, and DNS setup.
---

# 09 — Production Readiness

## Checklist

### SSR / OG Meta Tags (if social sharing matters)

- [ ] Express server that serves the frontend
- [ ] Fetches data and injects OG tags into an EJS template for link previews

### Environment Configs

- [ ] Environment-specific configs: dev / staging / prod
- [ ] `.env.example` up to date for all packages

### Hosting

Skip this section if user chose "Later" in step 00.

**Heroku:**
- [ ] `Procfile`
- [ ] `app.json` with env var descriptions, buildpacks, addons
- [ ] Deploy scripts in `package.json`

**NearlyFreeSpeech:**
- [ ] `run.sh` and `deploy.sh` scripts

### CI/CD

- [ ] GitHub Actions workflow: test + lint on PR
- [ ] Deploy workflow (manual or on merge to main)

### Security

- [ ] HTTPS / TLS setup
- [ ] CSP headers
- [ ] CORS locked down for prod (only allow production frontend origin)
- [ ] Rate limiting with Express (`express-rate-limit` or similar)
- [ ] Cloudflare Turnstile (bot protection) for public-facing endpoints
  - Backend: `TURNSTILE_SECRET_KEY` env var, middleware that extracts `cf-turnstile-token` header and verifies against Cloudflare's `siteverify` API
  - Frontend: `VITE_TURNSTILE_SITE_KEY` env var, Turnstile widget on public forms (signup, contact, public shares)
  - Apply middleware to unauthenticated routes only (authenticated users already passed auth)

### Monitoring / Analytics (PostHog)

- [ ] Install `posthog-node` (backend) and `posthog-js` (frontend)
- [ ] Add `POSTHOG_API_KEY` and `POSTHOG_HOST` env vars to backend and frontend
- [ ] Backend: replace console stubs in `logger.ts` with PostHog capture calls
- [ ] Frontend: initialize PostHog client, replace console stubs in `logger.ts` with PostHog capture calls
- [ ] Frontend: page view tracking, user identification on login
- [ ] Error monitoring / logging through PostHog in both frontend and backend

### Data

- [ ] DB backup strategy (automated backups, retention policy)

### DNS

- [ ] Domain / DNS setup notes
- [ ] SSL certificate provisioning
