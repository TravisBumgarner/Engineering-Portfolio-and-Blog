---
name: tb-02c-frontend-patterns
description: Add frontend patterns — lazyWithRetry chunk recovery, react-query with queryKeys factory, routes.ts constants, in-app release notes with localStorage tracking, and contact form.
---

# 02c — Frontend Patterns

## Checklist

### Lazy Loading + Chunk Retry

- [ ] `lazyWithRetry` wrapper — catches stale chunk errors after deploys, uses `sessionStorage` to auto-reload once, prevents infinite loops
- [ ] `ChunkErrorBoundary` — error boundary for failed dynamic imports with a manual refresh button. Pairs with `lazyWithRetry`.

### React Query

- [ ] react-query setup
- [ ] `queryKeys.ts` — factory functions for type-safe cache keys; ships with `authUser` and `currentUser`, add more as endpoints are built
- [ ] `src/api/` folder — plain async functions for API calls (fetch wrappers), one file per resource
  - Hooks in `src/hooks/` use these API functions as `queryFn` — hooks are for hooks, API calls live in `api/`

### Routes

- [ ] `routes.ts` — all routes as a `ROUTES` object
  - Each route: `{ href: () => string, label: string, external?: boolean }` — `href` is always a function, parameterized when needed (e.g., `href: (id: string) => `/items/${id}` `). `external` marks links that open in a new tab with an icon.
  - Used in both `<Route path={ROUTES.foo.href()}>` and link rendering
- [ ] `src/components/Router.tsx` — dedicated router component
  - All page imports via `lazy()` (or `lazyWithRetry` from the chunk retry pattern)
  - Wrapped in `<Suspense fallback={<Loading />}>`
  - Route guard layout components using `<Outlet />`:
    - `AnonymousRoute` — redirects to `/` if logged in
    - `MemberRoute` — redirects to `/login` if not logged in
    - `ModeratorRoute` — checks `user.userLevel >= UserLevel.MODERATOR`, redirects otherwise
    - `AdminRoute` — checks `user.userLevel >= UserLevel.ADMIN`, redirects otherwise
  - Catch-all `*` route navigates to 404

### Release Notes (In-App)

- [ ] `releaseNotes.ts` — typed array as single source of truth
  ```typescript
  interface ReleaseNoteEntry {
    version: string
    date: string
    changes: { category: 'Added' | 'Improved' | 'Fixed'; items: string[] }[]
  }
  ```
- [ ] Release notes modal that renders entries since user's last visit
- [ ] Track `LAST_SEEN_RELEASE_DATE` in `localStorage`
- [ ] Hook that compares against the changelog array and triggers modal via store on startup
- [ ] `src/pages/ReleaseNotes.tsx` — full release notes page

### Manual Cleanup (do not automate)

- [ ] Delete `src/pages/DeleteMe.tsx` and remove its import/usage from `App.tsx` after manual verification

### Contact Form

- [ ] `src/sharedComponents/ContactForm.tsx`
  - Props: `formSuffix: string` (appended to website field as `{project-name}-{formSuffix}`), optional `fieldsToHide?: ('name' | 'email')[]`
  - Fields: name, email, message (with character counter, max 800 chars), hidden website field for spam/routing
  - POSTs JSON to `https://contact-form.nfshost.com/contact`
  - Submit button shows sending/sent/failed states, resets after 5 seconds
  - Clears form on success, shows success/error messages below the form
