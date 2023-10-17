import { supabase } from "$lib/supabase";

/** @type {import('./$types').PageLoad} */
export async function load() {
    //Supabase
    const { data } = await supabase.from("projects").select();
    return {
        projects: data ?? [],
    };
}