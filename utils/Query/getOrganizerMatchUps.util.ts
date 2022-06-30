import { API } from 'aws-amplify';
import { listMatchUps } from '../../src/graphql/queries';
import { getMatchUpsReturn } from '../types/MatchUp.Type';

export async function getOrganizerMatchUps(
  id: string,
  showCards: number
): Promise<getMatchUpsReturn> {
  try {
    const filter = {
      organizer: {
        eq: id,
      },
    };

    const matchUpsData = await API.graphql({
      query: listMatchUps,
      variables: {
        filter: filter,
        offset: showCards,
      },
    });

    const retrievedData = await matchUpsData.data.listMatchUps;

    return retrievedData;
  } catch (err) {
    throw err;
  }
}
