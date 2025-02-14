export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
    strategy: 'prefix',
  fallbackLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root'
  }
})
)