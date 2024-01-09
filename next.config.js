/** @type {{reactStrictMode: boolean, i18n: {defaultLocale: string, locales: string[], localeDetection: boolean}}} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
