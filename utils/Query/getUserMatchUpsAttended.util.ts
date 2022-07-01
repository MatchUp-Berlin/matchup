import { API } from 'aws-amplify';
import { listSignUps } from '../../src/graphql/queries';
import { MatchUp } from '../types/MatchUp.Type';
import { SignUp } from '../types/SignUp.Type';
import { getMatchUpById } from './getMatchUpById.util';

export async function getUserMatchUpsAttended(
  userId: string
): Promise<MatchUp[]> {
  try {
    const signUps = await API.graphql({
      query: listSignUps,
      variables: {
        filter: { and: { userId: { eq: userId } }, attended: { eq: true } },
      },
    });

    const userMatchUps = await Promise.all(
      signUps.data.listSignUps.items.map(async (signUp: SignUp) => {
        try {
          const matchUp = await getMatchUpById(signUp?.matchUpId);
          if (matchUp !== undefined) return matchUp;
        } catch (err) {
          // Type Error will disappear once database is cleaned
          console.log(err);
        }
      })
    );

    return userMatchUps.filter((matchUp: MatchUp) => matchUp !== undefined);
  } catch (err) {
    throw err;
  }
}
