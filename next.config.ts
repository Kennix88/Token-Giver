import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    TOKEN_SYMBOL: process.env.TOKEN_SYMBOL,
  },
}

export default nextConfig
