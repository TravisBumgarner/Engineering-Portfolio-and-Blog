---
name: tb-08-desktop-setup-untested
description: Set up Electron Forge desktop app with type-safe IPC, path resolution, auto-migrations, daily DB backups, auto-updater, code signing, and multi-platform distribution.
---

# 08 — Desktop App Setup

## Checklist

### Electron Forge

- [ ] `packages/desktop/` with Electron Forge scaffolding
- [ ] `package.json` with `@scope/desktop` name, `productName`, `description`, `author`, `repository`
- [ ] Version matches root

### Type-Safe IPC

- [ ] `messages.types.ts` — shared type definitions for IPC channels, arg types, and return types
- [ ] Typed `ipcMain.handle()` wrappers in main process
- [ ] Typed `ipcRenderer.invoke()` wrappers in renderer
- [ ] Preload script with `contextBridge.exposeInMainWorld`
- [ ] `preload.d.ts` type declaration for `window.electron`

### Path Resolution

- [ ] Dev vs prod path resolution pattern
  - Use `app.isPackaged` to toggle between local dev paths and `app.getPath('userData')` in production

### Database (Desktop)

- [ ] Auto-migrations on app startup — Drizzle `migrate()` in main process
- [ ] Migration files bundled via `extraResource`
- [ ] Daily automatic database backup
  - Skip if today's backup already exists
  - Store in `userData/db_backups/`

### Auto-Updater

- [ ] `update-electron-app` with `electron-log` integration

### Code Signing + Distribution

- [ ] macOS code signing + notarization in CI
  - Certificate import via `security` CLI
  - `entitlements.plist`
  - Hardened runtime
- [ ] Multi-platform makers config: DMG, Squirrel (Windows), RPM, Deb, ZIP
- [ ] GitHub Actions workflow for desktop releases (`workflow_dispatch` trigger)
  - Multi-OS matrix: Windows, macOS, Linux
