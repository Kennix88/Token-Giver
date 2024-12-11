import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
  },
}

export default nextConfig
