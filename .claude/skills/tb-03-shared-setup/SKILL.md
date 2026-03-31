---
name: tb-03-shared-setup
description: Create the shared package with Zod API schemas, constants, useHealthCheck hook, version-bump script, and version-check pre-commit validation.
---

# 03 — Shared Setup

## Checklist

### Shared Package

- [ ] `packages/shared/` with `@scope/shared` name, matching root version
- [ ] `package.json` with `main`, `types`, and `exports` fields
- [ ] Shared Zod schemas for API request/response types
  - Backend and frontend both import these to enforce the API contract
- [ ] Shared constants file (not just API types)
- [ ] `UserLevel` enum/object in shared constants: `MEMBER = 0`, `MODERATOR = 2`, `ADMIN = 5`
  - Used by backend (schema, middleware) and frontend (route guards, UI)

### Health Check Hook

- [ ] `src/api/health.ts` — `fetchHealth()` plain async function that calls the backend health endpoint
- [ ] `useHealthCheck` hook in web package — returns `{ isHealthy }`, optimistically healthy (don't gate on isLoading)
- [ ] Uses react-query with `fetchHealth` as `queryFn` to poll (30s interval, 1 retry)
- [ ] Called in `AppContent` in App.tsx — gates rendering on `isHealthy`
  - When unhealthy: show a centered error Alert with a Retry button that reloads the page
  - When healthy: render the normal app (Header, Router, Footer, Modal, Toast)

### Version Bump Script

- [ ] `scripts/version-bump.mjs`
- [ ] Accepts `--patch`, `--minor`, `--major` flags
- [ ] Bumps version in all `package.json` files across the monorepo
- [ ] Updates workspace `@scope/*` dependency versions to `^{newVersion}`
- [ ] If chrome-extension exists, bumps `manifest.json` version too
- [ ] Adds a new empty entry in `releaseNotes.ts` with today's date and the new version
- [ ] Logs `{oldVersion} → {newVersion}` and reminds user to fill in changes
- [ ] Invocation: `npm run version-bump -- --patch|--minor|--major`

### Version Check Script

- [ ] `scripts/version-check.mjs`
- [ ] Validates all `package.json` versions match across the monorepo
- [ ] Validates workspace `@scope/*` dependencies are `^{expectedVersion}` or `*`
- [ ] Validates `releaseNotes.ts` has an entry for the current version
- [ ] If chrome-extension exists, validates `manifest.json` version matches
- [ ] Clear error messages listing mismatches, suggests running `version-bump`
- [ ] Exits with code 1 on failure (blocks commits)
- [ ] Wired into Husky pre-commit hook (runs before lint-staged)
