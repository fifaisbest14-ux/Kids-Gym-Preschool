import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;

// Anonymous client for browser / RLS insert
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Service-role client for server-side trusted operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
