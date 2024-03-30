export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (typeof supabaseUrl !== "string") {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL must be a valid string");
}

// Validate and export the Supabase Anon Key
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (typeof supabaseAnonKey !== "string") {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY must be a valid string");
}
