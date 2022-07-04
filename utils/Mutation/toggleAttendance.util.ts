import { API } from 'aws-amplify';
import { SignUp } from '../types/SignUp.Type';
import { getSignUp } from '../../src/graphql/queries';
import { updateSignUp } from '../../src/graphql/mutations';

export async function toggleAttendance(signUpId: String): Promise<SignUp> {
  try {
    const oldSignUp = await API.graphql({
      query: getSignUp,
      variables: { id: signUpId },
    });

    const newSignUp = oldSignUp.data.getSignUp;

    const attended = newSignUp.attended ? false : true;

    const toggledSignUp = await API.graphql({
      query: updateSignUp,
      variables: { input: { id: newSignUp.id, attended: attended } },
    });

    return toggledSignUp.data.updateSignUp;
  } catch (error) {
    throw error;
  }
}
