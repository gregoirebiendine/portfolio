import { browser } from '$app/environment';
import { loadTranslations } from '$lib/Translations/translations';
import { supabase } from "$lib/supabase";

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    //I18N
    if (browser) {
        const { pathname } = url;
        const initLocale = window.localStorage.getItem("lang") || 'en';
        await loadTranslations(initLocale, pathname);
    }

    //Supabase
    const { data } = await supabase.from("projects").select();
    return {
        projects: data ?? [],
    };
}