FROM node:lts-alpine
ENV NODE_ENV=production
ENV aws_appsync_graphqlEndpoint=$aws_appsync_graphqlEndpoint
ENV aws_appsync_apiKey=$aws_appsync_apiKey
ENV aws_user_files_s3_bucket=$aws_user_files_s3_bucket
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
RUN npm run build
CMD ["npm", "start"]
