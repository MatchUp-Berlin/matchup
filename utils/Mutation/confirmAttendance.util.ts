import { API } from 'aws-amplify';
import { SignUp } from '../types/SignUp.Type';
import { updateSignUp } from '../../src/graphql/mutations';
import { getMatchUpById } from '../Query/getMatchUpById.util';

export async function confirmAttendance(SignUpData: SignUp): Promise<SignUp> {
  try {
    SignUpData.attended = true;

    // Find the Signup

    const signUpId = await (
      await getMatchUpById(SignUpData.matchUpId)
    ).signups.items.filter((signup) => signup.userId === SignUpData.userId)[0]
      .id;

    const update = {
      id: signUpId,
      ...SignUpData,
    };

    const confirmedSignUp = await API.graphql({
      query: updateSignUp,
      variables: { input: update },
    });

    return confirmedSignUp.data.updateSignUp;
  } catch (error) {
    throw error;
  }
}
