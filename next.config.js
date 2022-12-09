const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    // 路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      'images': path.resolve(__dirname, 'public/images'),
    }

    return config;
  },
}

module.exports = nextConfig
