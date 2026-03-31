---
name: tb-route-builder
description: Scaffold a full CRUD route — prompts for resource name, HTTP methods, and access level, then generates backend routes, shared schemas, frontend API functions, react-query hooks, and query keys.
---

# Route Builder

## Purpose

Repeatable skill for adding a new API resource end-to-end. Prompts the user for details, then scaffolds backend routes, shared Zod schemas, frontend API functions, and react-query hooks.

## Key Rules

- **No destructured `any`**: Never destructure `req.params`, `req.query`, or `req.body` directly — always parse with Zod first via `.safeParse()`, then use the typed `.data` result.
- **Types live in shared**: Request bodies, response shapes, and entity types are Zod schemas in `packages/shared`. Both backend and frontend import from shared — avoid defining types only in one package.
- **react-query for all data fetching**: Frontend uses `useQuery` for reads and `useMutation` for writes. Plain fetch functions live in `src/api/`, hooks in `src/hooks/`.
- **Deletion requires confirmation**: Every delete action on the frontend must go through a ConfirmationModal before calling `.mutate()`.
- **JSON-serializable API types**: Shared Zod schemas for API responses must only use JSON-safe types. Dates become ISO 8601 `string` (not `Date`), `BigInt` becomes `string` or `number`, `Buffer` becomes base64 `string`, etc. The DB/Drizzle layer uses native types (`timestamp`, `bigint`), but route handlers return plain JSON. Frontend parses back to rich types only when needed for display.

## Step 1 — Prompt the User

Ask these questions **one at a time** — wait for the user's answer before asking the next question.

1. **Resource name** — singular noun (e.g., `photo`, `comment`, `invite`)
2. **Endpoints** — which endpoints to create? List the standard CRUD options and let the user pick. The user can say "all", pick by number, and/or add custom endpoints:
   - `GET /api/{resources}` — list (paginated)
   - `GET /api/{resources}/:id` — get by ID
   - `POST /api/{resources}` — create
   - `PATCH /api/{resources}/:id` — update
   - `DELETE /api/{resources}/:id` — delete
   - Custom — user can add non-standard endpoints (e.g., `POST /api/{resources}/:id/vote`, `GET /api/{resources}/:id/stats`)
   Example answers: "all", "1, 3, 5", "all + POST /:id/vote"
3. **Per-endpoint permissions** — for each selected endpoint, ask about:
   - **Access level**: `member` (default) | `moderator` (`>= UserLevel.MODERATOR`) | `admin` (`>= UserLevel.ADMIN`)
   - **Ownership check**: does the user need to own this resource? (yes/no)
   Present as a table for the user to fill in, e.g.:
   ```
   | #  | Endpoint              | Access level | Ownership check | Params                                          |
   |----|-----------------------|--------------|-----------------|--------------------------------------------------|
   | 1  | GET /api/photos       | member       | yes (own list)  | ?limit (1–100, default 50), ?offset (≥0, default 0) |
   | 2  | GET /api/photos/:id   | member       | yes             | :id (uuid)                                       |
   | 3  | POST /api/photos      | member       | n/a (creating)  | body (create schema)                             |
   | 4  | PATCH /api/photos/:id | member       | yes             | :id (uuid), body (update schema)                 |
   | 5  | DELETE /api/photos/:id| admin        | no              | :id (uuid)                                       |
   ```
   Number each row so the user can respond like "2: admin, no" to adjust specific rows.
   Params are pre-filled with sensible defaults. All params are validated with Zod:
   - `limit`: `z.coerce.number().int().min(1).max(100).default(50)`
   - `offset`: `z.coerce.number().int().min(0).default(0)`
   - `:id`: `z.string().uuid()`
   - Custom query/path params can be added per endpoint
4. **Fields** — present a pre-filled table that includes the standard columns (`id`, `createdAt`, `userId` if ownership applies) already filled in, plus placeholder rows for the user to specify additional fields. The user can add, remove, or modify any row:
   ```
   | #  | Column    | DB type                  | TS type  | Required | Default       |
   |----|-----------|--------------------------|----------|----------|---------------|
   | 1  | id        | uuid, primary key        | string   | yes      | defaultRandom |
   | 2  | createdAt | timestamp w/ timezone    | string   | yes      | now()         |
   | 3  | userId    | uuid, FK → users.id      | string   | yes      | —             |
   | 4  | name      | varchar(255)             | string   | yes      | —             |
   | 5  | ?         | ?                        | ?        | ?        | ?             |
   ```
   Omit row 3 (`userId`) if no endpoint has an ownership check.
5. **Scaffold pages?** — create minimal starter pages for this resource? (yes/no, default yes)
   - If yes, creates a list page and a detail page as a blank canvas to verify end-to-end functionality and expand from

## Step 2 — Shared Package (`packages/shared`)

### Zod Schemas (`packages/shared/src/schemas/{resource}.ts`)

- [ ] Resource schema with Zod (matches DB columns) — this is the single source of truth for the entity type
- [ ] Request schemas: create body, update body (partial with `.refine()` requiring at least one field)
- [ ] Response schemas: single resource, paginated list `{ {resources}: T[], total: number }`
- [ ] Inferred TypeScript types exported alongside schemas: `type {Resource} = z.infer<typeof {resource}Schema>`
- [ ] Export all from `packages/shared/src/schemas/index.ts`
- [ ] Re-export from `packages/shared/src/index.ts`

### Response Types (`packages/shared/src/schemas/responses.ts` — create once, skip if exists)

- [ ] `ErrorCode` type — union of string literal error codes (e.g., `'UNAUTHORIZED'`, `'FORBIDDEN'`, `'NOT_FOUND'`, `'{RESOURCE}_NOT_FOUND'`, `'INVALID_UUID'`, `'INVALID_REQUEST'`, `'RATE_LIMITED'`, `'INTERNAL_ERROR'`)
- [ ] `errorMessages` map — `ErrorCode → user-friendly string` for frontend display
- [ ] `ApiResponse<T>` discriminated union:
  ```typescript
  type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; errorCode: ErrorCode }
  ```
- [ ] Both frontend and backend import these — never redefine locally

### Constants (`packages/shared/src/constants.ts`)

- [ ] Add API path entries to `API_PATHS`:
  ```
  {resources}: '/api/{resources}',
  {resource}: (id: string) => `/api/{resources}/${id}`,
  ```

## Step 3 — Backend Routes (`packages/api`)

### Route Shared Utilities (create once, skip if exists)

**`packages/api/src/routes/shared/responses.ts`**
- [ ] `sendSuccess<T>(res, data, status?)` — `{ success: true, data }`
- [ ] `sendError(res, errorCode, status)` — `{ success: false, errorCode }`
- [ ] Convenience: `sendNotFound`, `sendForbidden`, `sendBadRequest`, `sendUnauthorized`, `sendInternalError`

**`packages/api/src/routes/shared/auth.ts`**
- [ ] `requireUserId(req, res)` — extracts `req.user.userId`, sends 401 if missing, returns `{ userId }` or `null`

**`packages/api/src/routes/shared/validation.ts`**
- [ ] `idParamsSchema` — Zod schema for `{ id: z.string().uuid() }`
- [ ] `paginationQuerySchema` — Zod schema for `{ limit?: number, offset?: number }` with defaults (limit 50/max 100, offset 0)
- [ ] If ownership: `getOwned{Resource}(id, userId, res)` — two-step check: queries DB without userId (404 if not found), then checks userId match (403 if not owned). Returns resource or `null`.

**`packages/api/src/routes/shared/access.ts`**
- [ ] `requireModerator(req, res)` — checks `req.user.userLevel >= UserLevel.MODERATOR`, sends 403 if not, returns `boolean`
- [ ] `requireAdmin(req, res)` — checks `req.user.userLevel >= UserLevel.ADMIN`, sends 403 if not, returns `boolean`

**`packages/api/src/routes/shared/index.ts`**
- [ ] Re-exports all shared utilities

### Rate Limiting (create once, skip if exists)

**`packages/api/src/middleware/rate-limit.ts`**
- [ ] `standardRateLimit` — 100 requests/min per user (default for most routes)
- [ ] `strictRateLimit` — 30 requests/min per user (for resource-intensive operations like create/upload)
- [ ] Key generator uses authenticated user ID: `(req as AuthenticatedRequest).user?.userId ?? 'unknown'`
- [ ] Returns structured error: `{ success: false, errorCode: 'RATE_LIMITED' }` with HTTP 429
- [ ] Logs rate limit hits with userId, method, path, IP

### Route Handler Files (`packages/api/src/routes/{resources}/`)

Each handler file follows the **validate → process → handler** pattern:

```typescript
interface ValidationContext { userId: string; /* ...parsed data */ }

async function validate(req, res): Promise<ValidationContext | null> {
  // 1. Extract auth (requireUserId)
  // 2. Parse params/query/body with Zod .safeParse() — NEVER destructure req.params directly
  // 3. Check access level if applicable (requireModerator/requireAdmin)
  // 4. Check ownership if applicable (getOwned{Resource})
  // Return typed context or null (error already sent)
}

async function processRequest(req, res, context): Promise<void> {
  // Business logic, DB calls, send response via sendSuccess/sendError
}

export async function handler(req, res): Promise<void> {
  const context = await validate(req, res)
  if (!context) return
  await processRequest(req, res, context)
}
```

**For each selected method, create a file.** Apply the access level and ownership checks from the user's per-endpoint permissions table:

- [ ] `list.ts` — GET list with pagination (limit/offset query params parsed with Zod). If ownership: filter by userId.
- [ ] `get.ts` — GET by ID, validates UUID via `idParamsSchema.safeParse()`. If ownership: `getOwned{Resource}()`.
- [ ] `create.ts` — POST, validates body with shared create schema via `.safeParse()`. Sets `userId` if ownership applies.
- [ ] `update.ts` — PATCH by ID, validates body with shared update schema. If ownership: `getOwned{Resource}()`.
- [ ] `delete.ts` — DELETE by ID. If ownership: `getOwned{Resource}()`. Removes from DB.
- Each handler's `validate()` calls `requireModerator()`/`requireAdmin()` if that endpoint's access level requires it

**Error handling in handlers:**
- [ ] Wrap `processRequest` in try/catch for operations that can fail (DB, external services)
- [ ] Log errors with structured context: resource ID, user ID, error message, stack trace
- [ ] Always return `sendInternalError(res)` on catch — never expose internal details
- [ ] Use logger, not console

**`index.ts` — Router registration:**
- [ ] Creates Express Router
- [ ] Applies middleware: `requireAuth`, `standardRateLimit` (or `strictRateLimit` for create/write-heavy routes)
- [ ] Per-endpoint access-level middleware — each route applies its own access check based on the user's answer (e.g., `router.delete('/:id', requireAdmin, deleteHandler)`)
- [ ] Maps each method to its handler
- [ ] Named export: `{resources}Router`

### Wire into App

- [ ] Import and mount router in `packages/api/src/index.ts`: `app.use('/api/{resources}', {resources}Router)`

### Database

- [ ] Add Drizzle schema table in `packages/api/src/schema.ts`
- [ ] Add DB query functions in `packages/api/src/queries/{resources}.ts`:
  - `get{Resource}ById(id, userId?)` — single resource, optionally filtered by owner
  - `get{Resources}Page(userId, limit, offset)` — paginated list
  - `get{Resources}Count(userId)` — total count for pagination
  - `create{Resource}(data)` — insert and return
  - `update{Resource}(id, data)` — partial update and return
  - `delete{Resource}(id)` — remove
- [ ] Generate migration: `npx drizzle-kit generate`

## Step 4 — Frontend (`packages/web`)

### API Functions (`packages/web/src/api/{resources}.ts`)

- [ ] Plain async functions — one per endpoint
- [ ] Uses `fetch` with auth headers (or `authenticatedFetch` wrapper if it exists)
- [ ] Returns typed data using shared response types (`ApiResponse<T>`)
- [ ] List function accepts `{ limit, offset }` params

### Query Hooks (`packages/web/src/hooks/queries/use{Resource}.ts`)

Uses react-query (`@tanstack/react-query`):

- [ ] `use{Resources}(options?)` — paginated list query
  - queryKey: `queryKeys.{resources}(page, limit)`
- [ ] `use{Resource}(id)` — single resource query
  - queryKey: `queryKeys.{resource}(id)`
  - `enabled: !!id`

### Mutation Hooks (`packages/web/src/hooks/mutations/use{Action}{Resource}.ts`)

One file per mutation, named by action. Uses react-query `useMutation`:

- [ ] `useCreate{Resource}` — POST, invalidates list queries on success
- [ ] `useUpdate{Resource}` — PATCH, optimistic update on single resource cache, rollback on error, invalidates list on settled
- [ ] `useDelete{Resource}` — DELETE, optimistic removal from list cache, invalidates list on success
  - **Must use a confirmation modal before executing** — wire through the existing modal system (ConfirmationModal)
  - The delete button opens the modal; the modal's confirm callback calls `.mutate()`

### Query Keys (`packages/web/src/queryKeys.ts`)

- [ ] Add entries:
  ```
  {resources}: (page?, limit?) => ['{resources}', { page, limit }] as const,
  {resource}: (id: string) => ['{resources}', id] as const,
  ```

## Step 5 — Scaffold Pages (if user said yes)

Minimal starter pages to verify end-to-end functionality. These are intentionally bare — just enough to confirm the API works and serve as a blank canvas to expand from.

### List Page (`packages/web/src/pages/{Resources}/{Resources}.tsx`)

- [ ] Uses `use{Resources}()` query hook to fetch paginated list
- [ ] Renders a simple MUI `Table` (or `List`) with one row per resource showing key fields
- [ ] Pagination controls (Next/Previous) using limit/offset
- [ ] If POST endpoint exists: an "Add {Resource}" button that opens a modal with form fields from the create schema, wired to `useCreate{Resource}` mutation
- [ ] If PATCH endpoint exists: an edit icon button per row that opens the same modal pre-filled with the row's data, wired to `useUpdate{Resource}` mutation
- [ ] The create/edit modal is a single component (e.g., `{Resource}FormModal`) that handles both create and edit modes based on whether an existing resource is passed in
- [ ] If DELETE endpoint exists: a delete icon button per row, wired to `useDelete{Resource}` mutation through ConfirmationModal
- [ ] Loading state via `<Loading />` shared component
- [ ] Error state shown inline

### Detail Page (`packages/web/src/pages/{Resource}/{Resource}.tsx`)

- [ ] Route: `/api/{resources}/:id` — reads `id` from URL params
- [ ] Uses `use{Resource}(id)` query hook to fetch single resource
- [ ] Displays all fields in a simple layout (e.g., `Typography` labels + values)
- [ ] If PATCH endpoint exists: an "Edit" button that opens the `{Resource}FormModal` pre-filled with current data, wired to `useUpdate{Resource}` mutation
- [ ] If DELETE endpoint exists: a "Delete" button wired to `useDelete{Resource}` mutation through ConfirmationModal, navigates back to list on success
- [ ] Loading and error states

### Wiring

- [ ] Add routes to `routes.ts`:
  ```
  {resources}: { href: () => '/{resources}', label: '{Resources}' },
  {resource}: { href: (id: string) => `/{resources}/${id}`, label: '{Resource}' },
  ```
- [ ] Add lazy-loaded route entries in `Router.tsx` with appropriate route guard (`MemberRoute`, `ModeratorRoute`, `AdminRoute`) based on the most permissive access level from the endpoints table
- [ ] Add to navigation if appropriate (list page link in header nav)

## Step 6 — Verify

- [ ] Run `npx @biomejs/biome check` on every new/modified file
- [ ] Run `getDiagnostics` on every new/modified file
- [ ] Run `npx drizzle-kit generate` if schema changed
- [ ] Verify shared package builds: `npm run build -w @scope/shared`
