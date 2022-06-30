/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      'images.unsplash.com',
      'matchup-storage-b0c9ab6f155447-staging.s3.us-east-1.amazonaws.com',
    ],
  },
};
