create extension if not exists pgcrypto;

create table if not exists spaces (
  id text primary key,
  icon text,
  is_dynamic boolean default false,
  tags text[] default '{}',
  name_ja text,
  name_en text,
  name_zh text,
  name_ar text,
  name_es text,
  description_ja text,
  description_en text,
  description_zh text,
  description_ar text,
  description_es text,
  updated_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key,
  display_name text not null,
  avatar_url text,
  preferred_language text default 'ja',
  updated_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key,
  space_id text not null references spaces(id) on delete cascade,
  participant_id uuid not null,
  display_name text not null,
  avatar_url text,
  text text not null,
  created_at timestamptz default now()
);

create table if not exists call_history (
  id uuid primary key,
  session_id uuid not null,
  space_id text not null references spaces(id) on delete cascade,
  caller_id uuid not null,
  caller_name text not null,
  caller_avatar_url text,
  callee_id uuid,
  callee_name text,
  callee_avatar_url text,
  started_at timestamptz not null,
  ended_at timestamptz not null,
  duration_seconds integer default 0,
  ended_reason text,
  created_at timestamptz default now()
);

create index if not exists idx_messages_space_created_at on messages(space_id, created_at desc);
create index if not exists idx_call_history_space_started_at on call_history(space_id, started_at desc);
