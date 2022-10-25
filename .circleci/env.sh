#!/bin/bash

echo aws_appsync_graphqlEndpoint=$aws_appsync_graphqlEndpoint >> ../.env.local
echo aws_appsync_apiKey=$aws_appsync_apiKey >> ../.env.local
echo aws_user_files_s3_bucket=$aws_user_files_s3_bucket >> ../.env.local