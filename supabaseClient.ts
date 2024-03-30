import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseAnonKey } from "./config";

//@ts-ignore
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
