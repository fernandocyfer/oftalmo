/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.API_URL,
    API_TOKEN: process.env.API_TOKEN
  }
}

module.exports = nextConfig
