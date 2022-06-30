import { API } from 'aws-amplify';
import { deleteSignUp } from '../../src/graphql/mutations';
import { getUserById } from '../Query/getUserById.util';
import { SignUp } from '../types/SignUp.Type';

export async function removeUserFromMatchUp(
  userId: string,
  matchUpId: string
): Promise<SignUp | string> {
  try {
    const signedUpUser = await getUserById(userId);

    const signUpId = signedUpUser.signups.items.filter(
      (signup: SignUp) => signup.matchUpId === matchUpId
    )[0].id;

    const removedSignUp = await API.graphql({
      query: deleteSignUp,
      variables: { input: { id: signUpId } },
    });

    return removedSignUp.data.deleteSignUp;
  } catch (error) {
    throw error;
  }
}
