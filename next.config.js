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
    ],
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  env: {
    aws_project_region: process.env.aws_project_region,
    aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
    aws_appsync_region: process.env.aws_appsync_region,
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: process.env.aws_appsync_apiKey,
    aws_cognito_identity_pool_id: process.env.aws_cognito_identity_pool_id,
    aws_cognito_region: process.env.aws_cognito_region,
    aws_user_pools_id: process.env.aws_user_pools_id,
    aws_user_pools_web_client_id: process.env.aws_user_pools_web_client_id,
    aws_user_files_s3_bucket: process.env.aws_user_files_s3_bucket,
    aws_user_files_s3_bucket_region:
      process.env.aws_user_files_s3_bucket_region,
  },
});
