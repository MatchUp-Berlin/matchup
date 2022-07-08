# MatchUp

[![CodeFactor](https://www.codefactor.io/repository/github/mitcheman/matchup/badge)](https://www.codefactor.io/repository/github/mitcheman/matchup)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="http://matchup.vercel.app/">
    <img src="public/favicon.ico" alt="Logo" width="60" height="60">
  </a>

  <h4 align="center">MatchUp</h4>

  <p align="center">
    Find local sport matches
    <br/>
    <a href="https://youtu.be/vILG4DxNP4w">Beta walkthrough</a>
  </p>
</div>

## About The Project

[![Product Name Screen Shot][product-screenshot]](http://matchup.vercel.app/)

Looking for a fun and easy way to meet up and play sports with locals in your city? MatchUp makes it simple and quick to connect with other sports enthusiasts in your area so you can hit the court, field, or course in no time!
By requiring a small commitment deposit of 5€, we make sure that people that signed up to a MatchUp actually appear. If they do,
the deposit gets refunded - but if not, it will be automatically donated to a local charity organization.

## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Backend

This app runs on AWS Ampilfy

To set it up follow the instructions at [AWS Amplify](https://docs.amplify.aws/cli/start/install/)

## Environment Variables

Take these specific variables from the js file generated at src/aws-exports.js and create the env data listed below at <code>/.env.local</code>

```bash
aws_appsync_graphqlEndpoint="https://example-endpoint/graphql"
aws_appsync_apiKey="api-key-example"
aws_user_files_s3_bucket="s3-bucket-name-example"
```

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

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="exmaple-public-key"
STRIPE_SECRET_KEY="example-secret-key"
```

## PWA 

This app is deployed as a PWA on Apple App Store and Google Play

To do the same generate the needed packages at [PWA Builder](https://www.pwabuilder.com/) and follow their instructions for publishing.


[product-screenshot]: ./product-screenshot.png