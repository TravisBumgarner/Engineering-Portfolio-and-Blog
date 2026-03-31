---
name: project-setup
description: Reference documentation for the just-recordings project architecture, conventions, and setup patterns. Use this when onboarding, adding new features, or needing to understand how the layers connect.
---

# Project Setup Reference

## Monorepo Structure

npm workspaces defined in root `package.json`. Key packages:

```
packages/
  shared/   - Zod schemas, types, auth utilities (published as @just-recordings/shared)
  api/      - Express backend, Drizzle ORM, S3 integration
  web/      - React + Vite frontend, MUI, Zustand, TanStack Query
```

### Root Commands

```bash
npm run dev:web         # docker-compose + API + web (concurrently)
npm run build           # all packages
npm run test            # vitest across all packages
npm run typecheck       # tsc across all packages
npm run lint            # biome lint
npm run lint:fix        # biome lint --write
npm run db:generate     # drizzle-kit generate (migrations)
npm run db:migrate      # run migrations
```

## Pre-commit (Husky)

`.husky/pre-commit` runs sequentially:

1. `npm run lint` (biome)
2. `npm run typecheck` (tsc)
3. `npm test` (vitest)

All three must pass before a commit goes through.

## Biome

`biome.json` at root. Key settings:
- Single quotes, no semicolons, 100-char line width
- Overrides for `__tests__/` files, migrations, Storybook stories

## Git Submodules

`.claude/` is a git submodule from `https://github.com/travisbumgarner/claude-brain.git`. Clone with:

```bash
git clone --recurse-submodules <repo-url>
# or after clone:
git submodule update --init --recursive
```

## TypeScript

`tsconfig.base.json` at root: ES2022 target, strict mode, declaration maps. Each package extends it.

---

## Shared Package (`@just-recordings/shared`)

### Zod Runtime Validation

Zod schemas are the **single source of truth** for types. Define the schema, infer the type:

```typescript
// packages/shared/src/api/recordings.ts
export const recordingSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  duration: z.number(),
  // ...
})
export type Recording = z.infer<typeof recordingSchema>
```

Schemas live in `packages/shared/src/api`:
- `responses.ts` - ErrorCode enum, ApiResponse<T> type, error messages
- `recordings.ts` - Recording entity, CRUD request/response schemas
- `shares.ts` - RecordingShare entity, share request/response schemas
- `users.ts` - User entity, /me response schema

### Error Codes

All error codes defined in `packages/shared/src/api/responses.ts` as a const object:

```typescript
export const ErrorCode = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  // ...
} as const
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode]
```

Every error code must have a corresponding entry in `errorMessages` (enforced by test).

### Package Exports

```json
{
  ".": "./dist/index.js",
  "./api": "./dist/api/index.js",
  "./styles": "./dist/styles/index.js",
  "./auth": "./dist/auth/index.js"
}
```

---

## API Package

### Express Route Pattern

Routes follow validate-then-process with typed context:

```typescript
// packages/api/src/routes/shares/create.ts
export interface CreateShareValidationContext {
  userId: string
  recordingId: string
  shareType: ShareType
}

export async function validate(req, res): Promise<Context | null> {
  // 1. Check auth (requireUserId)
  // 2. Validate params (isValidUUID)
  // 3. Validate body
  // 4. Check ownership/permissions
  // Return null on failure (response already sent), context on success
}

export async function processRequest(req, res, context): Promise<void> {
  // Business logic using validated context
  sendSuccess(res, { data }, 201)
}

export async function handler(req, res): Promise<void> {
  const context = await validate(req, res)
  if (!context) return
  await processRequest(req, res, context)
}
```

### API Response Format

All responses use a consistent envelope:

```typescript
// Success
{ success: true, data: { ... } }

// Error
{ success: false, errorCode: 'ERROR_CODE' }
```

Helper functions in `packages/api/src/routes/shared/responses.ts`:

```typescript
sendSuccess(res, data, status?)     // 200
sendBadRequest(res, errorCode?)     // 400
sendUnauthorized(res)               // 401
sendForbidden(res)                  // 403
sendNotFound(res, errorCode?)       // 404
sendInternalError(res)              // 500
sendError(res, errorCode, status)   // custom
```

### GET /me Endpoint

Simple example of the full pattern — `packages/api/src/routes/users.ts`:

```typescript
router.get('/me', requireAuth, standardRateLimit, async (req, res) => {
  const authReq = req as AuthenticatedRequest
  if (!authReq.user) { sendUnauthorized(res); return }

  const user = await getOrCreateUserByAuth({
    authId: authReq.user.authId,
    email: authReq.user.email || '',
  })
  sendSuccess(res, { id: user.id, email: user.email, ... })
})
```

### Drizzle ORM

Schema in `packages/api/src/db/schema.ts`. Three tables:

- **users** - id (UUID), authId (Supabase UID), email, displayName, createdAt
- **recordings** - id (UUID), status enum (uploading/completed/failed), S3 keys, userId FK
- **recording_shares** - id (UUID), shareToken, shareType (link/single_view), viewCount, maxViews, expiresAt, revokedAt

Config: `packages/api/drizzle.config.ts`, migrations in `packages/api/drizzle/`.

Commands: `npm run db:generate`, `npm run db:migrate`, `npm run db:studio`.

### Auth Middleware

`packages/api/src/middleware/auth.ts`:
- Extracts Bearer token from Authorization header
- Calls `supabase.auth.getUser(token)` to verify JWT
- Creates/retrieves local user record on first request
- Attaches `{ authId, userId, email }` to `req.user`

---

## Web Package

### Supabase Auth

Auth client in `packages/web/src/auth/client.ts` (Supabase anon key). Service in `packages/web/src/auth/service.ts`:

- `login(email, password)` - `signInWithPassword()`
- `signup(email, password)` - `signUp()` (email confirmation required)
- `logout()` - `signOut()`
- `getToken()` - Returns access_token for API calls
- `resetPassword(email)` - Password reset flow
- MFA support: enroll, verify, challenge, unenroll

### API Client Pattern

Each resource gets a file in `packages/web/src/api/`. Pattern:

```typescript
// packages/web/src/api/users.ts
export const getMe = async (): Promise<ApiResponse<User>> => {
  try {
    const result = await authenticatedFetch(`${config.apiBaseUrl}/users/me`)
    if ('success' in result) return result  // Error already parsed

    const json = await result.json()
    return { success: true, data: json.data }
  } catch {
    return { success: false, errorCode: 'INTERNAL_ERROR' }
  }
}
```

`authenticatedFetch` (in `packages/web/src/api/shared.ts`) handles:
- Getting Supabase token
- Setting Authorization header
- Parsing error responses into `{ success: false, errorCode }`

### TanStack Query Hooks

Queries in `packages/web/src/hooks/queries/`, mutations in `packages/web/src/hooks/mutations/`.

```typescript
// packages/web/src/hooks/queries/useCurrentUser.ts
export function useCurrentUser() {
  const { data: authUser } = useAuthUser()
  return useQuery({
    queryKey: queryKeys.currentUser,
    queryFn: async () => {
      const response = await getMe()
      if (!response.success) throw new ApiError(response.errorCode)
      return response.data
    },
    enabled: !!authUser,
  })
}
```

### Modal System

Modals use Preact Signals for global state. Structure:

```
packages/web/src/sharedComponents/Modal/
  Modal.consts.tsx    - MODAL_ID enum
  components/
    DefaultModal.tsx  - Base modal wrapper (MUI Modal, 500px, close button)
    ShareModal.tsx    - Share link management
    ConfirmationModal.tsx - Yes/no confirmation
  RenderModal.tsx     - Switch on activeModalSignal.value.id
  index.tsx           - Export
```

To add a new modal:
1. Add ID to `MODAL_ID` in `Modal.consts.tsx`
2. Create component in `components/` with props interface including `id: typeof MODAL_ID.YOUR_MODAL`
3. Add case to `RenderModal.tsx` switch
4. Add props type to `ActiveModal` union in `RenderModal.tsx`
5. Open via: `activeModalSignal.value = { id: MODAL_ID.YOUR_MODAL, ...props }`

### State Management

- **Zustand** for app state (stores in `packages/web/src/stores/`)
- **Preact Signals** for lightweight reactive state (modals, UI flags)
- **TanStack Query** for server state

---

## Adding a New Feature (Full Stack Checklist)

1. **Shared schema** - Add Zod schema + inferred type in `packages/shared/src/api/`
2. **DB schema** - Add/update Drizzle table in `packages/api/src/db/schema.ts`, run `db:generate`
3. **DB queries** - Add query functions in `packages/api/src/db/queries/`
4. **API route** - Create validate/processRequest/handler in `packages/api/src/routes/`, register in router
5. **Web API client** - Add function in `packages/web/src/api/`
6. **Query/mutation hook** - Add hook in `packages/web/src/hooks/queries/` or `mutations/`
7. **UI component** - Build in `packages/web/src/pages/` or `sharedComponents/`
