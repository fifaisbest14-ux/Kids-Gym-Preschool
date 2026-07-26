-- Kids' Gym Preschool & Daycare — Supabase Leads Schema
-- Run this script in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  parent_name text not null,
  whatsapp text not null,
  email text,
  child_age text not null,
  programs text[] not null,
  area text not null,
  preferred_time text,
  message text,
  consent boolean not null default false,
  -- Attribution & tracking metadata
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  fbclid text,
  landing_page text,
  referrer text,
  user_agent text,
  ip_hash text,
  status text default 'new'
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;

-- Drop existing policies if any
drop policy if exists "Allow anon insert only" on public.leads;
drop policy if exists "Allow service role full access" on public.leads;

-- Policy 1: Allow public/anon users to INSERT leads only (No SELECT/UPDATE/DELETE)
create policy "Allow anon insert only" on public.leads
  for insert
  with check (true);

-- Policy 2: Service role gets full access
create policy "Allow service role full access" on public.leads
  for all
  using (true);
