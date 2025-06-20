/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  // Optimize for production builds
  output: 'standalone',
  swcMinify: true,
  // Disable static optimization for API routes during build
  ...(process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL ? {
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
  } : {})
};

module.exports = nextConfig;
