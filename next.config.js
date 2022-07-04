const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  typescript: { ignoreBuildErrors: true },
  nextConfig,
  images: {
    domains: [
      'images.unsplash.com',
      'matchup-storage-b0c9ab6f112810-dev.s3.us-east-1.amazonaws.com',
      'vitals.vercel-insights.com',
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  env: {
    aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
    aws_appsync_apiKey: process.env.aws_appsync_apiKey,
    aws_user_files_s3_bucket: process.env.aws_user_files_s3_bucket,
  },
});
