export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en', 'fr'],
    strategy: 'no_prefix',
    defaultLocale: 'en',
    messages: {
      'en': {
        welcome: 'Welcome'
      },
      'en-US': {
        welcome: 'Welcome'
      },
      'fr': {
        welcome: 'Bienvenue'
      }
    }
  }))
  