import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    TOKEN_SYMBOL: process.env.TOKEN_SYMBOL,
    WEBAPP_LINK: process.env.WEBAPP_LINK,
    FRIENDS_MESSAGE: process.env.FRIENDS_MESSAGE,
  },
}

export default nextConfig
