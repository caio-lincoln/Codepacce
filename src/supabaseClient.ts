import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas variáveis reais do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 