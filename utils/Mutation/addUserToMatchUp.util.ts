import { API } from 'aws-amplify';
import { createSignUp } from '../../src/graphql/mutations';
import { SignUp } from '../types/SignUp.Type';
import { getMatchUpById } from '../Query/getMatchUpById.util';

export async function addUserToMatchUp(
  SignUpData: SignUp
): Promise<SignUp | string> {
  try {
    SignUpData.attended = false;

    const matchup = await getMatchUpById(SignUpData.matchUpId);
    if (matchup.attendanceMax === matchup.signups.items.length)
      return 'MatchUp is fully booked';
    if (
      matchup.signups.items.some(
        (signup) => signup.userId === SignUpData.userId
      )
    )
      return 'You are already signed up';

    const newSignUp = await API.graphql({
      query: createSignUp,
      variables: { input: SignUpData },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    const newSignedUpUser = newSignUp.data.createSignUp;
    return newSignedUpUser;
  } catch (error) {
    throw error;
  }
}
