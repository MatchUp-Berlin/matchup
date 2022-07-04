import { API, Storage } from 'aws-amplify';
import { listMatchUps } from '../../src/graphql/queries';
import { getMatchUpsReturn, MatchUp } from '../types/MatchUp.Type';

export async function getOrganizerMatchUps(
  id: string,
  // maxCards: number
  next: string
): Promise<getMatchUpsReturn> {
  try {
    const filter = {
      organizerId: {
        eq: id,
      },
    };

    const matchUpsData = await API.graphql({
      query: listMatchUps,
      variables: {
        filter: filter,
        limit: 3,
        nextToken: next,
      },
    });

    console.log('from utils     ', next, matchUpsData);

    const retrievedData = await matchUpsData.data.listMatchUps;

    await Promise.all(
      retrievedData.items.map(async (matchUp: MatchUp) => {
        const headerImage = await Storage.get(matchUp.id);
        matchUp.image = headerImage;
        return matchUp;
      })
    );

    return retrievedData;
  } catch (err) {
    throw err;
  }
}
