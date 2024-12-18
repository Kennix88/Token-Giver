import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts')

const nextConfig = {
  /* config options here */
  env: {},
}

export default withNextIntl(nextConfig)
