const SUPABASE_KEY_ENV_MESSAGE =
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY";

export function getSupabasePublishableKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

export function getMissingSupabaseEnvMessage() {
  return `Missing required Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and ${SUPABASE_KEY_ENV_MESSAGE}`;
}
