/**
 * Supabase elevated-privilege client
 * Bypasses RLS - use only for server-side operations that don't have user context
 * (e.g., webhook handlers, cron jobs)
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let serviceRoleClient: SupabaseClient<any, "public", any> | null = null;

export function createServiceRoleClient() {
  if (serviceRoleClient) {
    return serviceRoleClient;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !secretKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY or SUPABASE_SERVICE_ROLE_KEY environment variables"
    );
  }

  // Using 'any' for database types since we don't have generated types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serviceRoleClient = createClient<any>(supabaseUrl, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return serviceRoleClient;
}
