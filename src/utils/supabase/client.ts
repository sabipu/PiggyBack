import { createBrowserClient } from "@supabase/ssr";
import { getMissingSupabaseEnvMessage, getSupabasePublishableKey } from "./env";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = getSupabasePublishableKey();

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(getMissingSupabaseEnvMessage());
  }

  return createBrowserClient(supabaseUrl, supabasePublishableKey);
}
