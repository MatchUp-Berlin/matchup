import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_matchup_GRAPHQLAPIENDPOINTOUTPUT;
const GRAPHQL_API_KEY = process.env.API_matchup_GRAPHQLAPIKEYOUTPUT;

const query = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      givenName
      familyName
      email
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const variables = {
    input: {
      id: event.request.userAttributes.sub,
      givenName: event.request.userAttributes.given_name,
      familyName: event.request.userAttributes.family_name,
      email: event.request.userAttributes.email,
    },
  };

  /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
    },
    body: JSON.stringify({ query, variables }),
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);
  console.log('REQUEST', request);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    console.log('RESPONSE', response);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack,
        },
      ],
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body),
  };
};
