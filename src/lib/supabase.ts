import { PUBLIC_SUPABASE_ANON } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://rjmnnqdllmnwybzekxns.supabase.co', PUBLIC_SUPABASE_ANON)