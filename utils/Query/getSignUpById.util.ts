import { API, Storage } from 'aws-amplify';
import { getSignUp } from '../../src/graphql/queries';
import { SignUp } from '../types/SignUp.Type';

export async function getSignInById(id: string): Promise<SignUp> {
  try {
    const signUpData = await API.graphql({
      query: getSignUp,
      variables: { id: id },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    return signUpData.data.getSignUp;
  } catch (error) {
    throw error;
  }
}
