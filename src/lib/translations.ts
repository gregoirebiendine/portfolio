import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./langs/en/home.json')
      ).default,
    },
    {
      locale: 'fr',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./langs/fr/home.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);