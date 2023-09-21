import { browser } from '$app/environment';
import { loadTranslations } from '$lib/translations';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const { pathname } = url;
    if (browser) {
        const initLocale = window.localStorage.getItem("lang") || 'en';
        await loadTranslations(initLocale, pathname);
    }
    return {};
}