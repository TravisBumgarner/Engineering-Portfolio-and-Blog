---
name: tb-00-app-setup
description: Scaffold a new monorepo project. Prompts for project name, packages, database choice, and hosting target, then sets up npm workspaces, Husky, Biome, and base config files.
---

# 00 — App Setup

## User Prompts

Before scaffolding, ask the user for:

- [ ] **Project name** — used for `package.json` `name` and `@scope/` prefix (e.g., `@just-recordings/web`)
- [ ] **Description** — one-liner for `package.json` `description`
- [ ] **Author** — `name <email>` format
- [ ] **Repository URL** — GitHub repo URL
- [ ] **Node version** — for `.nvmrc` (e.g., `22`)
- [ ] **Packages to include** — which of: web, api, desktop, mobile, chrome-extension
- [ ] **Database choice** — SQLite or Postgres
- [ ] **Hosting target** — Heroku, NearlyFreeSpeech, or Later (skip hosting setup for now)

## Port Assignment

At scaffold time, **randomly generate** distinct ports for each service to avoid collisions across projects:

- **Frontend (Vite)**: random port in range `3000–3999`
- **Backend (API)**: random port in range `4000–4999`
- **Postgres (Docker host port)**: random port in range `5400–5499` (maps to container's `5432`)

Write the chosen ports into `.env` and `.env.example` for each package. Show the user the assigned ports after generation.

## Checklist

- [ ] Initialize npm workspaces monorepo
  - Root `package.json` with `private: true`, `workspaces: ["packages/*"]`
  - Fill in name, version (`0.1.0`), description, author, repository from user prompts
  - Set `engines.node` to match `.nvmrc`
- [ ] Create `packages/` folder with subdirectories per selected package
- [ ] `.nvmrc` or `.node-version` pinning Node version
- [ ] `.gitignore` — node_modules, dist, .env, .DS_Store, coverage, etc.
- [ ] Husky setup at app level (not per-package)
  - `prepare` script: `husky`
  - `.husky/pre-commit` runs: `npm run version-check`, `npx lint-staged`, `npm run typecheck`, `npm test`
- [ ] Biome setup at app level — aggressive config
  - `biome.json` config using schema `https://biomejs.dev/schemas/2.4.6/schema.json`
  - Use `assist.actions.source.organizeImports: "on"` (not the removed `organizeImports` top-level key)
  - `vcs.enabled: true`, `vcs.clientKind: "git"`, `vcs.useIgnoreFile: true`
  - `files.includes` excluding node_modules, dist, out, build, min files, lock files
  - Aggressive lint rules beyond recommended:
    - `suspicious.noExplicitAny: "warn"`
    - `suspicious.noArrayIndexKey: "warn"`
    - `suspicious.useIterableCallbackReturn: "off"`
    - `suspicious.noConsole: "error"` — all console usage must go through `logger.ts`
    - `style.noNonNullAssertion: "warn"`
    - `a11y.useMediaCaption: "warn"`
  - Overrides to relax rules where needed:
    - `**/*.test.ts`, `**/*.test.tsx`, `**/__tests__/**` — `noExplicitAny: "off"`, `noConsole: "off"`
    - `**/logger.ts` — `noConsole: "off"` (logger wraps console)
    - `**/config.ts`, `**/seed.ts`, `**/migrate.ts`, `scripts/**` — `noConsole: "off"` (startup/CLI scripts)
    - `**/*.stories.tsx`, `**/*.stories.ts` — `noShadowRestrictedNames: "off"`
  - `lint-staged` config in root `package.json`: runs Biome on `*.{ts,tsx,js,jsx,json}`
- [ ] VS Code workspace settings (`.vscode/settings.json`)
  - Set Biome as default formatter: `editor.defaultFormatter: "biomejs.biome"`
  - Enable format on save: `editor.formatOnSave: true`
  - Enable Biome organize imports on save via `editor.codeActionsOnSave`
- [ ] VS Code recommended extensions (`.vscode/extensions.json`)
  - Recommend `biomejs.biome`
- [ ] README template with local setup instructions
