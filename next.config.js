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
			`${process.env.aws_user_files_s3_bucket}.s3.eu-central-1.amazonaws.com`,
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
