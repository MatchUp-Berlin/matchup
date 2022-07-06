import { API } from 'aws-amplify';
import { SignUp } from '../types/SignUp.Type';
import { updateUser as updateUserQuery } from '../../src/graphql/mutations';
import { User } from '../types/User.Type';

export async function updateUser(userId: String, input: Partial<User>): Promise<SignUp> {
  try {
    const newUser = await API.graphql({
      query: updateUserQuery,
      variables: { input: { id: userId, ...input } },
    });

    return newUser.data.updateUser;
  } catch (error) {
    throw error;
  }
}
