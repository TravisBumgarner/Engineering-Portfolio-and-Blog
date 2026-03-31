# Global Rules

1. **File length limit**: Keep files under 300-400 lines.
   - **Frontend**: Use the component pattern. `Foo.tsx` becomes `Foo/Foo.tsx` with `Foo/components/Dependency.tsx`. Applies to pages, sharedComponents, and components.
2. **Environment variables are always required**: Every `.env` value must exist in `.env`, `.env.example`, and pass through `config.ts`. Validate with Zod at startup. Applies to all packages. **Never use `.default()` or `.optional()` in `config.ts` Zod schemas** — all values must come from `.env` explicitly and are required.
3. **No destructured `any`**: Never destructure in a way that produces `any` (e.g., `const {foo} = request.params`). Always validate with Zod using shared package validators.
4. **Never push to a merged PR branch**: Before pushing to a GitHub PR, verify it has not been merged.
5. **Never commit to main**.
6. **Sort imports manually**: The Write/Edit tools do not trigger Biome's organize-imports. Always sort imports per Biome rules (non-type before type imports, alphabetical) when writing or editing files.
7. **Fix all linter/diagnostic errors before finishing**: After touching a file, ensure there are no red-line diagnostics (TypeScript errors, Biome warnings, etc.). Working code is not enough — the file must be clean in the editor too. **Run `npx @biomejs/biome check` on every file you create or edit before considering the task complete.**
8. **No deprecated APIs**: Do not use deprecated functions, methods, or patterns from any dependency. If TypeScript shows a `@deprecated` warning (strikethrough), find the current recommended replacement. Check library changelogs/docs when unsure. **Run `getDiagnostics` on every file you create or edit and fix any deprecation hints (code 6385/6387) before considering the task complete.**

## General

- Read the project's own CLAUDE.md first. It takes precedence over these shared rules.
- Understand existing code before modifying it. Never propose changes to code you haven't read.
- Keep changes focused. Only do what was asked. Don't refactor, add docs, or "improve" surrounding code.
- Don't over-engineer. Prefer simple, direct solutions over abstractions for hypothetical futures.

## Code Quality

- Don't introduce security vulnerabilities (injection, XSS, SSRF, etc.).
- Validate at system boundaries (user input, external APIs). Trust internal code.
- Delete unused code. No backwards-compatibility shims, re-exports, or `// removed` comments.
- Follow the project's existing patterns, formatting, and naming conventions.

## Testing

- Follow TDD when working with the ralph skill chain.
- Tests describe behavior, not implementation. Don't over-mock.
- Don't create separate tasks for unit tests; they're part of each implementation task.

## Git

- Don't commit unless explicitly asked or a skill directs you to.
- Never commit directly to main or master. All work must be done on a feature branch via PR.
- Write concise commit messages that explain *why*, not *what*.

## Skills & Prompts

Shared skills live in `skills/`. Use the appropriate skill for the task:
- `scope` — break a design into atomic, achievable tasks
- `ralph-code` — implement code (TDD green phase)
- `ralph-test` — write tests (TDD red phase)
- `ralph-refactor` — refactor code (TDD refactor phase)
- `ralph-pr` — prepare and open a pull request
- `pr-create` — create a pull request
- `ralph-next` — pick up the next task

Language expertise is available in `skills/`.

# Skills Index

Step-by-step project setup skills live in `skills/`. Run them in order for a new project, or individually to add a layer.

| File | Description |
|------|-------------|
| `tb-00-app-setup` | Monorepo scaffold, Husky, Biome, user prompts |
| `tb-01-backend-setup` | Express + TypeScript API server |
| `tb-02a-frontend-core` | React + Router + MUI + Zustand + Storybook |
| `tb-02b-frontend-components` | Modal, Header, Footer, pages, sharedComponents |
| `tb-02c-frontend-patterns` | Lazy loading, react-query, routes.ts, release notes |
| `tb-03-shared-setup` | Shared types, API contract, version-bump & version-check scripts |
| `tb-04-database` | SQLite or Postgres + Drizzle |
| `tb-05-connecting-apis` | Ports, dev server, concurrent startup, placeholder auth |
| `tb-06-auth-setup` | Supabase auth, middleware, protected routes (replaces placeholder auth) |
| `tb-07-mobile-setup-untested` | CapacitorJS or React Native (untested) |
| `tb-08-desktop-setup-untested` | Electron Forge, IPC, auto-update, signing (untested) |
| `tb-09-production-readiness-untested` | Deploy, CI/CD, security, monitoring (untested) |
| `tb-10-status-check` | Audit prompt — scan codebase against all steps |
| `tb-route-builder` | Scaffold a full CRUD route end-to-end (repeatable) |
