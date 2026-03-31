---
name: tb-06-auth-setup
description: Add Supabase authentication — JWT middleware, login/signup/logout pages, protected routes, 401 redirect, and Zustand user state.
---

# 06 — Auth Setup

## Prerequisites (already done in earlier steps)

These should already exist — verify before proceeding, do not recreate:

- Users table with `authId`, `userLevel`, etc. (step 04)
- `UserLevel` constant in shared package (step 03)
- Zustand store with `user` state including `userLevel` (step 02a)
- Route guards: `AnonymousRoute`, `MemberRoute`, `ModeratorRoute`, `AdminRoute` (step 02c)
- Placeholder auth from step 05 (will be removed below)

## Remove Placeholder Auth

- [ ] Delete `POST /api/auth/login` placeholder endpoint
- [ ] Delete placeholder auth middleware (the one reading `x-user-id` header)
- [ ] Remove `x-user-id` header logic from frontend `authenticatedFetch` / API wrapper
- [ ] Delete `src/sharedComponents/LoginPrompt_DEVELOPER_ONLY.tsx` and its usage in `App.tsx`
- [ ] Remove localStorage key for placeholder name

## Checklist

### Supabase

- [ ] Supabase project created and configured
- [ ] `.env` variables for Supabase URL and anon key (in both frontend and backend)

### Backend

- [ ] Auth middleware — extracts and verifies Supabase JWT, resolves `appUserId` from users table, attaches to `req.user`
- [ ] Replace placeholder middleware with Supabase middleware on all protected routes

### Frontend

- [ ] `src/pages/Login.tsx` — replaces placeholder login
- [ ] `src/pages/Signup.tsx` — replaces placeholder signup
- [ ] `src/pages/Logout.tsx` (or logout action)
- [ ] `src/pages/PasswordReset.tsx`
- [ ] `src/pages/Profile.tsx`
- [ ] Email verification flow (Supabase built-in)
- [ ] Redirect-to-login on 401 response pattern (react-query global error handler)
- [ ] Update Zustand store: set `user` on Supabase login, clear on logout
- [ ] Update `authenticatedFetch` to use Supabase JWT token instead of `x-user-id` header
