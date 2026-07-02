# Supabase setup

The app uses **Supabase (PostgreSQL)** as its database. All DB access is
server-side via `src/lib/supabase.js` → `getSupabase()` (service-role key).

The MongoDB → Supabase migration is complete (`mongoose` removed).

## Setting up a new environment (e.g. Vercel, or a fresh Supabase project)

### 1. Create the tables

Open the Supabase dashboard → **SQL Editor** → paste the contents of
[`schema.sql`](./schema.sql) → **Run**. This creates the `blogs` and
`content` tables, indexes, the `updated_at` triggers, the
`increment_blog_views()` function, and enables RLS.

### 2. Set the environment variables

Dashboard → **Project Settings → API**. Set these (locally in `.env.local`,
on Vercel in the project's Environment Variables):

```
SUPABASE_URL=https://<ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role / secret key — SECRET, server-only>
# Optional, only if you later read from the browser:
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon / publishable key>
```

Supabase's newer `sb_secret_…` / `sb_publishable_…` keys work fine as the
service-role / anon values respectively.

### 3. Seed the marketing content (optional)

Services / industries / locations / etc. render from the static files in
`src/data/*.js` even before the DB has rows. To persist editable copies into
Supabase, sign into `/admin` → **Content** → **“Seed defaults”**.

## Notes

- `blogs` and `content` have **RLS enabled with no policies** — the anon key
  can't touch them directly. The server uses the service-role key, which
  bypasses RLS.
- The content sort column is `sort_order`, not `order` (PostgREST reserves
  `order` as a query parameter); `src/lib/content.js` maps it back to `order`.
