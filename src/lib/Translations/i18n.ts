import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {en} from '$lib/Translations/langs/en';
import {fr} from '$lib/Translations/langs/fr';

i18next
  .use(LanguageDetector)
  .init({
    detection: {
        order: ["localStorage"],
        caches: ["localStorage"],
        lookupLocalStorage: "lang",
    },
    fallbackLng: "en",
    supportedLngs: ['en', 'fr'],
    resources: {
        en: en,
        fr: fr
    },
    interpolation: {
        escapeValue: false,
    }
});

export default () => createI18nStore(i18next);