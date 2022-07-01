import { API, Storage } from 'aws-amplify';
import { listMatchUps } from '../../src/graphql/queries';
import { getMatchUpsReturn } from '../types/MatchUp.Type';

export async function getOrganizerMatchUps(
  id: string
): Promise<getMatchUpsReturn> {
  try {
    const filter = {
      organizerId: {
        eq: id,
      },
    };

    const matchUpsData = await API.graphql({
      query: listMatchUps,
      variables: { filter: filter },
    });

    const retrievedData = await matchUpsData.data.listMatchUps;

    const imageData = await Promise.all(
      retrievedData.items.map(async (matchUp) => {
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
