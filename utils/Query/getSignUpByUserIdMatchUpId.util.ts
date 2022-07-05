import { API, Storage } from 'aws-amplify';
import { listSignUps } from '../../src/graphql/queries';
import { SignUp } from '../types/SignUp.Type';

export async function getSignUpByUserIdMatchUpId(
  userId: string,
  matchUpId: string
): Promise<SignUp> {
  try {
    const signUpData = await API.graphql({
      query: listSignUps,
      variables: {
        filter: {
          and: { userId: { eq: userId }, matchUpId: { eq: matchUpId } },
        },
        // authMode: 'AMAZON_COGNITO_USER_POOLS'
      },
    });

    return signUpData.data.listSignUps.items[0];
  } catch (error) {
    throw error;
  }
}
