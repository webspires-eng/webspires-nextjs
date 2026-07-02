-- ============================================================
--  Webspires — Supabase (PostgreSQL) schema
--  Run this once in the Supabase dashboard → SQL Editor.
--  Project: webspires (nkcphvlncbsdbnigoyzw)
-- ============================================================

-- gen_random_uuid() lives in pgcrypto (enabled by default on Supabase,
-- but this makes the script self-contained).
create extension if not exists pgcrypto;

-- ── Auto-update updated_at on every UPDATE ──────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
--  blogs
-- ============================================================
create table if not exists public.blogs (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  slug            text not null unique,
  excerpt         text default '',
  content         text not null,
  cover_image     text default '',
  cover_image_alt text default '',
  category        text default 'General',
  tags            text[] default '{}',
  author          text default 'Webspires Team',
  status          text default 'draft' check (status in ('draft', 'published')),
  featured        boolean default false,
  reading_time    integer default 1,
  views           integer default 0,
  seo             jsonb default '{}'::jsonb,
  faqs            jsonb default '[]'::jsonb,
  published_at    timestamptz,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index if not exists blogs_status_published_at_idx
  on public.blogs (status, published_at desc);
create index if not exists blogs_category_idx on public.blogs (category);
create index if not exists blogs_tags_idx on public.blogs using gin (tags);

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
  before update on public.blogs
  for each row execute function public.set_updated_at();

-- Atomic view counter (called from the API route).
create or replace function public.increment_blog_views(post_slug text)
returns void
language sql
as $$
  update public.blogs set views = views + 1 where slug = post_slug;
$$;

-- ============================================================
--  content  (flexible CMS collection: services, industries, …)
--  NB: the sort column is `sort_order`, NOT `order` — PostgREST
--  reserves `order` as a query parameter.
-- ============================================================
create table if not exists public.content (
  id          uuid primary key default gen_random_uuid(),
  type        text not null,
  slug        text not null,
  sort_order  integer default 0,
  data        jsonb default '{}'::jsonb,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),
  unique (type, slug)
);

create index if not exists content_type_order_idx
  on public.content (type, sort_order);

drop trigger if exists content_set_updated_at on public.content;
create trigger content_set_updated_at
  before update on public.content
  for each row execute function public.set_updated_at();

-- ============================================================
--  Row Level Security
--  Every DB call in the app uses the SERVICE ROLE key on the
--  server (RLS is bypassed by that key). We still enable RLS
--  with no policies so the public ANON key can never read/write
--  these tables directly, even if it leaks to the browser.
-- ============================================================
alter table public.blogs   enable row level security;
alter table public.content enable row level security;
