# MatchUp

[![CodeFactor](https://www.codefactor.io/repository/github/mitcheman/matchup/badge)](https://www.codefactor.io/repository/github/mitcheman/matchup)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Backend

This app runs on AWS Ampilfy

To set it up follow the instructions at [AWS Amplify](https://docs.amplify.aws/cli/start/install/)

## Environment Variables

Take these specific variables from the js file generated at src/aws-exports.js and create the env data listed below at /.env.local

aws_appsync_graphqlEndpoint="https://example-endpoint/graphql" <br>
aws_appsync_apiKey="api-key-example" <br>
aws_user_files_s3_bucket="s3-bucket-name-example" <br>

The environment variables and duplicated aws-exports file is for [Vercel deployment](https://vercel.com/). <br>
These process.env variables are used in the following files: src/exportdata.js and next.config.js

### context for aws-exports.js and exportdata.js
If we were to deploy on AWS Amplify, AWS would generate the aws-exports file for its deployment but vercel does not do this.
aws-exports contains some sensitive data so we need to duplicate it and provide the process.env data.
aws-exports will be regenerated in your repo on every amplify push/pull so better to just duplicate it.

If you deploy on vercel make sure to add these environment variables on that vercel project as well.

## Stripe Integration

for stripe integration located at pages/api/checkout_sessions

add the environment variables

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="exmaple-public-key" <br>
STRIPE_SECRET_KEY="example-secret-key"

## PWA 

This app is deployed as a PWA on Apple App Store and Google Play

To do the same generate the needed packages at [PWA Builder](https://www.pwabuilder.com/) and follow their instructions for publishing.
