---
name: tb-10-status-check
description: Audit the codebase against all setup skills (00-09). Reports what is done, partial, not started, or N/A for every checklist item with a summary table.
---

# 10 — Status Check

## Purpose

This is an audit prompt. When invoked, scan the codebase and report what is done vs not done against every checklist item in skills `00` through `09`.

## Instructions

1. Read all skill files (`00-app-setup.md` through `09-production-readiness.md`).
2. For each checklist item, inspect the codebase to determine its status:
   - **Done** — the file/config/pattern exists and matches the spec
   - **Partial** — some of it exists but it's incomplete or doesn't fully match
   - **Not started** — nothing found
   - **N/A** — the user opted out of this (e.g., no mobile package, chose SQLite over Postgres)
3. Output a summary table per skill file:

```
## 00 — App Setup
| Status      | Item                          | Notes                     |
|-------------|-------------------------------|---------------------------|
| Done        | npm workspaces                |                           |
| Partial     | Husky pre-commit              | Missing version-check     |
| Not started | README template               |                           |
```

4. At the end, provide a high-level summary:
   - Total items: X
   - Done: X | Partial: X | Not started: X | N/A: X
   - **Recommended next step**: the lowest-numbered skill with incomplete items

## When to Run

- After completing a skill, to verify nothing was missed
- At the start of a session, to orient on where the project stands
- Before a release, as a final checklist pass
