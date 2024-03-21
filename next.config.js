/** @type {{reactStrictMode: boolean, i18n: {defaultLocale: string, locales: string[], localeDetection: boolean}}} */
const nextConfig = {
  env: {
    BASE_API_URL: 'https://inctagram.work',
    DEVELOPMENT_FRONT_BASE_URL: 'http://localhost:3000',
    IP_GEOLOCATION_API_KEY: `fcd669f49237426e82bcd62bbb815031`,
    NEXT_PUBLIC_RECAPTCHA_SECRET_KEY: `6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ`,
    PRODUCTION_FRONT_BASE_URL: 'https://freedomindz.site',
  },
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'staging-it-incubator.s3.eu-central-1.amazonaws.com',
        pathname: '/trainee-instagram-api/Image/**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
