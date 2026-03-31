---
name: tb-04-database
description: Set up the database layer — SQLite or Postgres with Drizzle ORM, migrations, seed data, and connection management.
---

# 04 — Database

## Checklist

### Choose One: SQLite or Postgres

**SQLite:**
- [ ] SQLite file in a sensible location (e.g., `data/` directory, or `userData` for desktop)
- [ ] Drizzle ORM config for SQLite

**Postgres:**
- [ ] Docker Compose file for local Postgres — expose a random host port from range `5400–5499` (mapped to container's `5432`) to avoid collisions across projects. Port should already be assigned from step 00; if not, generate one.
- [ ] Connection pooling config
- [ ] Drizzle ORM config for Postgres

### Common

- [ ] Drizzle schema definitions — default schema should include a `users` table (no `examples` table):
  ```ts
  export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    authId: uuid('auth_id').unique().notNull(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    displayName: varchar('display_name', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    userLevel: integer('user_level').notNull().default(0), // 0 = member, 2 = moderator, 5 = admin
    tosVersion: varchar('tos_version', { length: 20 }),
    ppVersion: varchar('pp_version', { length: 20 }),
    agreedAt: timestamp('agreed_at', { withTimezone: true }),
    analyticsConsent: varchar('analytics_consent', { length: 20 }),
  })
  ```
- [ ] Migration scripts — `drizzle-kit generate` and `drizzle-kit migrate`
- [ ] Seed data pattern — a script to populate the DB with test data
  - **Must check `NODE_ENV !== 'production'`** and exit immediately if prod — seeding should never run in production
  - Seed only regular members (userLevel 0) — do not seed moderator or admin users
- [ ] DB connection setup in backend, imported from a `db.ts` module
- [ ] `.env` variables for DB connection (host, port, user, password, database name or file path)
