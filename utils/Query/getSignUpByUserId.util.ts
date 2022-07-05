import { API, Storage } from 'aws-amplify';
import { listSignUps } from '../../src/graphql/queries';
import { SignUp } from '../types/SignUp.Type';

export async function getSignUpByUserId(userId: string): Promise<SignUp> {
  try {
    const signUpData = await API.graphql({
      query: listSignUps,
      variables: { filter: { userId: userId } },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });

    return signUpData.data.getSignUp;
  } catch (error) {
    throw error;
  }
}
