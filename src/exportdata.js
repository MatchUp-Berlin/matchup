/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: 'eu-central-1',
  aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
  aws_appsync_region: 'eu-central-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: process.env.aws_appsync_apiKey,
  aws_cognito_identity_pool_id:
    'eu-central-1:70b88cec-f8fe-45fb-b768-72602fcf9da0',
  aws_cognito_region: 'eu-central-1',
  aws_user_pools_id: 'eu-central-1_xQ5Hq7xa6',
  aws_user_pools_web_client_id: 'favohqhud2dndbkbenk359mhr',
  oauth: {},
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL', 'GIVEN_NAME', 'FAMILY_NAME'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      'REQUIRES_LOWERCASE',
      'REQUIRES_NUMBERS',
      'REQUIRES_SYMBOLS',
      'REQUIRES_UPPERCASE',
    ],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_user_files_s3_bucket: process.env.aws_user_files_s3_bucket,
  aws_user_files_s3_bucket_region: 'eu-central-1',
  geo: {
    amazon_location_service: {
      region: 'eu-central-1',
      search_indices: {
        items: ['placeindex92e6cd50-stage'],
        default: 'placeindex92e6cd50-stage',
      },
      maps: {
        items: {
          'mapf19b652b-stage': {
            style: 'VectorEsriLightGrayCanvas',
          },
        },
        default: 'mapf19b652b-stage',
      },
    },
  },
};
export default awsmobile;
