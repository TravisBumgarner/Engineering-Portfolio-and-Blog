---
name: tb-02b-frontend-components
description: Create core frontend components — pages (Home, 404, 500), modal system, Header, Footer, shared components (Loading, Toast), and favicon/meta setup.
---

# 02b — Frontend Components

## Checklist

### Pages

- [ ] `src/pages/Home.tsx`
- [ ] `src/pages/Error404.tsx`
- [ ] `src/pages/Error500.tsx` with error boundary wrapper

### Shared Components

- [ ] `src/sharedComponents/Loading.tsx` — spinner / loading indicator
- [ ] `src/sharedComponents/Toast.tsx` — reads `toast` state from Zustand store, auto-dismisses after timeout. Add `toast`, `showToast(message, severity?)`, and `dismissToast` to the store. Render `<Toast />` in App.tsx.

### Modal System

- [ ] `src/sharedComponents/Modal/modal.types.ts` — modal IDs as constants, discriminated union types for modal props. Modal types live here, not in the store. The store only holds `activeModal` with the type imported from this file.
- [ ] `src/sharedComponents/Modal/ConfirmationModal.tsx` — same default width/max width as DefaultModal
- [ ] `src/sharedComponents/Modal/DefaultModal.tsx` — default width `500px`, max width `90%` via `slotProps.paper`. Includes a "Got it" dismiss button in `DialogActions`.
- [ ] `src/sharedComponents/Modal/RenderModal.tsx` — reads `activeModal` from store, renders the correct modal
- [ ] Zustand store entry for `activeModal` (set up in 02a) — imports `ActiveModal` type from `modal.types.ts`

### Header

- [ ] `src/components/Header/Header.tsx` — no AppBar, plain `<Box component="header">` with flex layout
- [ ] App title top-left, linked to home via `ROUTES.home.href()`
- [ ] `src/components/Header/components/Navigation.tsx` — data-driven dropdown menu
  - `NavItem` type: `keyof typeof ROUTES | 'divider'`
  - Separate route arrays per user level: `ANON_ROUTES`, `MEMBER_ROUTES`, `ADMIN_ROUTES`
  - Selects routes based on `user.userLevel` from Zustand store
  - Supports `'divider'` entries rendered as `<Divider />`
  - External links (routes with `external: true`) show open-in-new icon
  - Internal links use React Router `<Link>`

### Footer

- [ ] `src/components/Footer.tsx`
- [ ] Data-driven sections — `sections` array of `{ header, links: { key: keyof ROUTES }[] }`, no hardcoded URLs or copyright text
- [ ] Links rendered from `ROUTES` keys (label and href derived automatically)
- [ ] External links show an open-link icon to the right of the text

### Theme Override

- [ ] Add `themeMode` (`'system' | 'light' | 'dark'`) and `setThemeMode` to the Zustand store (default `'system'`)
- [ ] `AppThemeProvider` reads `themeMode` from the store — overrides system preference when set to `'light'` or `'dark'`

### DeleteMe Test Component

- [ ] `src/pages/DeleteMe.tsx` — rendered directly in App.tsx (not routed). Buttons to:
  - Open a confirmation modal (on confirm, shows a success toast)
  - Trigger info / error / warning toasts
  - Toggle theme mode (system / light / dark) via radio buttons
- [ ] To clean up: delete the file, its import, and `<DeleteMe />` from App.tsx

### Favicon / Meta

- [ ] Favicon — copy `favicon.png` from this skill directory into `public/favicon.png`
- [ ] Meta tags (title, description, etc.)
