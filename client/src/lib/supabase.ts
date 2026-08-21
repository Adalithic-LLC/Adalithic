import { createClient } from "@supabase/supabase-js";

// Supabase client for the Arcatext promo redemption page (/redeem).
//
// Both values are supplied at build time by the Pages workflow. They are
// PUBLIC by design — the anon key is a publishable key constrained by RLS, and
// the same pair already ships inside the Arcatext iOS binary — but they are
// read from the environment rather than committed, because this repository is
// public and a key baked into git history is painful to rotate.
//
// Missing config is surfaced as a thrown error at call time rather than a
// silent no-op: a redemption page that quietly fails to reach Supabase looks
// to the user exactly like an invalid code.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

// `persistSession: false` — the redemption session exists only for the length
// of this one page visit. Nothing else on adalithic.com is authenticated, and
// leaving a live Arcatext session in localStorage on a shared or public
// computer serves no purpose here.
export const supabase = createClient(
  SUPABASE_URL ?? "https://placeholder.supabase.co",
  SUPABASE_ANON_KEY ?? "placeholder",
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);
