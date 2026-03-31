---
name: tb-05-connecting-apis
description: Wire up frontend and backend — assign ports via .env, configure CORS, set up concurrent dev startup script, and verify end-to-end API connectivity.
---

# 05 — Connecting APIs

## Checklist

- [ ] Assign distinct ports for frontend dev server and backend, configured via `.env`
  - Ports should already be randomly assigned from step 00 (frontend `3000–3999`, backend `4000–4999`)
  - If not yet assigned, generate random ports in those ranges to avoid collisions across projects
- [ ] Frontend `config.ts` includes `API_URL` pointing to backend
- [ ] Backend CORS allows frontend dev origin via `CORS_ORIGIN` env var (e.g., `http://localhost:5173`)
- [ ] `scripts/wait-for-db.mjs` — polls Postgres with `pg_isready` via Docker until the database accepts connections (retries with 1s delay, exits 1 after timeout)
- [ ] Startup script to run everything concurrently
  - Root `package.json` script using `concurrently` or similar
  - Wait for DB before starting: `"dev": "node scripts/wait-for-db.mjs && concurrently ..."`
- [ ] Verify the first API request works end-to-end using shared types from `packages/shared`

## Placeholder Auth (removed when real auth is added in step 06)

Temporary auth so routes can be tested end-to-end before Supabase is set up. No passwords, no tokens, no JWTs — purely for development.

### Backend

- [ ] `POST /api/auth/login` — accepts `{ name: string }` (case-sensitive), hashes the name (e.g., SHA-256) to produce a deterministic `appUserId`. Finds or creates a user row in the DB with that ID. Returns `{ userId, displayName, userLevel }`.
- [ ] Placeholder auth middleware — reads `x-user-id` header from request, looks up user in DB, attaches to `req.user`. Sends 401 if missing or not found.
- [ ] Apply placeholder middleware to all resource routes (same place `requireAuth` will go later)

### Frontend

- [ ] `src/sharedComponents/LoginPrompt_DEVELOPER_ONLY.tsx` — a small popup/dialog (not a page) that shows on every app load when the user is not logged in
  - Single "Name" text field and a "Log in" button
  - Stores the last-used name in `localStorage` so it's auto-filled next time
  - Calls the placeholder login endpoint, stores user in Zustand store on success
  - Not dismissable — user must enter a name to use the app
- [ ] On login success: store `userId` and pass it as `x-user-id` header on all subsequent API requests (via the `authenticatedFetch` wrapper or a global header)
- [ ] Logout: clear Zustand store and `x-user-id` header (popup reappears)
- [ ] Rendered in `AppContent` in `App.tsx` — show popup when no user in store, show normal app when logged in

### Notes

- No pages, no routes — just a popup overlay
- The name is **case-sensitive** — "Alice" and "alice" are different users
- Same name always produces the same userId, so you can "log back in" as the same user
- **This entire placeholder is removed when real auth is added in step 06**
