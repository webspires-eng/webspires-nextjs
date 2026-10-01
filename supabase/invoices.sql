-- ============================================================
--  Webspires — invoices
--  Run this once in the Supabase dashboard → SQL Editor.
--  (Invoice branding/defaults reuse the existing `content` table as a
--   single row: type = 'settings', slug = 'invoice' — no table needed.)
-- ============================================================

create extension if not exists pgcrypto;

-- Reuses the shared updated_at trigger function from schema.sql. If you are
-- running this on a fresh project without schema.sql, uncomment this:
-- create or replace function public.set_updated_at()
-- returns trigger language plpgsql as $$
-- begin new.updated_at = now(); return new; end; $$;

create table if not exists public.invoices (
  id              uuid primary key default gen_random_uuid(),
  number          text not null unique,
  -- Unguessable token for the public share link (/invoice/<token>).
  share_token     text not null unique,
  status          text not null default 'draft'
                  check (status in ('draft', 'unpaid', 'paid', 'cancelled')),
  currency        text not null default 'GBP',
  issue_date      date not null default current_date,
  due_date        date,

  client_name     text not null,
  client_company  text default '',
  client_email    text default '',
  client_phone    text default '',
  client_address  text default '',

  -- [{ description, details, qty, rate }]
  items           jsonb not null default '[]'::jsonb,
  discount        numeric(14,2) not null default 0,
  tax_rate        numeric(6,3)  not null default 0,
  tax_label       text default 'VAT',
  -- Stored for listing/stats; always recomputed from items on save.
  subtotal        numeric(14,2) not null default 0,
  total           numeric(14,2) not null default 0,

  notes           text default '',
  terms           text default '',
  payment_details text default '',
  paid_at         timestamptz,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create index if not exists invoices_created_idx
  on public.invoices (created_at desc);
create index if not exists invoices_status_idx
  on public.invoices (status);

drop trigger if exists invoices_set_updated_at on public.invoices;
create trigger invoices_set_updated_at
  before update on public.invoices
  for each row execute function public.set_updated_at();

-- Per-invoice snapshot of the sender's business details (address, contact,
-- logo, signature block…). Copied from Invoice Settings when the invoice is
-- created, so later settings changes never alter existing invoices.
-- (Safe to re-run; added after the table was first created.)
alter table public.invoices
  add column if not exists business jsonb not null default '{}'::jsonb;

-- RLS on, no policies: only the server (service-role key) can touch it.
alter table public.invoices enable row level security;
