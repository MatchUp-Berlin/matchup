import { API } from 'aws-amplify';
import { SignUp } from '../types/SignUp.Type';
import { getSignUp } from '../../src/graphql/queries';
import { updateSignUp } from '../../src/graphql/mutations';
import { getMatchUpById } from '../Query/getMatchUpById.util';

export async function toggleAttendance(SignUpData: SignUp): Promise<SignUp> {
  try {
    const oldSignUp = await API.graphql({
      query: getSignUp,
      variables: { id: SignUpData.id },
    });

    const newSignUp = oldSignUp.data.getSignUp;

    const attended = newSignUp.attended ? false : true;

    const toggledSignUp = await API.graphql({
      query: updateSignUp,
      variables: { input: { id: newSignUp.id, attended: attended } },
    });

    console.log(toggledSignUp);

    return toggledSignUp.data.updateSignUp;
  } catch (error) {
    throw error;
  }
}
