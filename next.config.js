/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      process: false,
      crypto: require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    };

    return config;
  },
  env: {
    NEXT_PUBLIC_IS_DEMO: process?.env?.NEXT_PUBLIC_IS_DEMO ?? false,
  },
};

module.exports = nextConfig;
