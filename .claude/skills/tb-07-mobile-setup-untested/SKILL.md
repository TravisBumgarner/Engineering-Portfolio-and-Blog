---
name: tb-07-mobile-setup-untested
description: Set up a mobile app package using CapacitorJS (wrapping web) or React Native, with API config and auth integration.
---

# 07 — Mobile App Setup

## Checklist

### Choose One: CapacitorJS or React Native

**CapacitorJS (wraps the existing web app):**
- [ ] Capacitor initialized in `packages/mobile/` or added to `packages/web/`
- [ ] iOS and Android platform projects generated
- [ ] Native config (app name, bundle ID, icons, splash screen)
- [ ] Build and run scripts for iOS and Android

**React Native (separate app with TypeScript):**
- [ ] React Native project in `packages/mobile/`
- [ ] TypeScript configured
- [ ] Navigation setup (React Navigation)
- [ ] Shared types imported from `packages/shared`
- [ ] Build and run scripts for iOS and Android

### Common

- [ ] `.env` / config pattern for API URL (pointing to backend)
- [ ] Auth integration — reuses Supabase auth from step 06
