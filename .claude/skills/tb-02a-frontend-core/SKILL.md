---
name: tb-02a-frontend-core
description: Set up the frontend package with React, React Router, Material UI, dark/light theme, styleConsts, Zustand store, Storybook, and the app directory structure.
---

# 02a — Frontend Core

## Checklist

- [ ] TypeScript + React project in `packages/web/`
  - `package.json` with `@scope/web` name, matching root version
- [ ] React Router setup
- [ ] Material UI setup
- [ ] `src/styles/` directory for all style-related files
  - `src/styles/Theme.tsx` — MUI theme with `AppThemeProvider` component (default export), `getThemeOptions(isDark)` builder, `responsiveFontSizes`, `CssBaseline`, system `prefers-color-scheme` toggle. Baseline typography for h1–h4, body1, body2 using `FONT_SIZES`/`SPACING` from styleConsts. Exports `lightTheme` and `darkTheme` named exports.
  - `src/styles/styleConsts.ts` — `COLORS` grayscale palette (`gray50`–`gray950`, `black`, `white`), `SPACING` consts as `{ px, int }`, `FONT_SIZES` consts as `{ px, int }`
- [ ] Zustand store setup
  - Include `activeModal` state for modal system
  - Include `user` state for auth (placeholder until step 06)
- [ ] `config.ts` — all `.env` variables validated with Zod at startup
- [ ] `.env` and `.env.example` for this package
- [ ] `logger.ts` — thin wrapper around `console.log`/`console.error` with `info` and `error` methods. Uses console for dev; stubs for production logging (replaced with PostHog in `09-production-readiness`)
- [ ] Storybook setup
  - Vitest integration
  - Theme provider decorator on all stories (using `AppThemeProvider` from `styles/Theme.tsx`)
  - a11y addon
- [ ] App directory structure:
  - `src/App.tsx` and `src/components/` for app-level components
  - `src/pages/` for page components
  - `src/sharedComponents/` for reusable components (Button, Thumbnail, etc.)
  - Small components: `src/pages/Small.tsx`
  - Large components: `src/pages/Large/Large.tsx` + `Large/components/LargeDependency.tsx`
