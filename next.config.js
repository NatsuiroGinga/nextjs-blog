// Next.js配置
/** @type {import(  'next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    protocol: 'http',
    host: 'natsuiroginga.work',
    port: 8080,
  }
}

module.exports = nextConfig;