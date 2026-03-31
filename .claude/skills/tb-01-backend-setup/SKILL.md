---
name: tb-01-backend-setup
description: Set up a TypeScript + Express backend package with CORS, env validation via Zod, health check endpoint, structured logging, and graceful shutdown.
---

# 01 — Backend Setup

## Checklist

- [ ] TypeScript + Express project in `packages/api/`
  - `package.json` with `@scope/api` name, matching root version
- [ ] `tsconfig.json` configured
- [ ] CORS setup — always uses `CORS_ORIGIN` from env (configured per environment)
- [ ] `config.ts` — all `.env` variables imported and validated with Zod at startup
  - Every variable in `.env`, `.env.example`, and `config.ts`
- [ ] `.env` and `.env.example` for this package
- [ ] Health check endpoint (`GET /health`)
- [ ] `logger.ts` — thin wrapper around `console.log`/`console.error` with `info` and `error` methods. Uses console for dev; stubs for production logging (replaced with PostHog in `09-production-readiness`)
- [ ] Graceful shutdown handling — listen for `SIGTERM`/`SIGINT`, close DB connections and server
- [ ] Dev script using `tsx watch`
