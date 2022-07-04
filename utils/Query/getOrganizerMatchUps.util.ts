import { API, Storage } from 'aws-amplify';
import { byUserOrganized } from '../../src/graphql/queries';
import { getMatchUpsReturn, MatchUp } from '../types/MatchUp.Type';

export async function getOrganizerMatchUps(
  id: string,
  token: string,
): Promise<getMatchUpsReturn> {
  try {

    const matchUpsData = await API.graphql({
      query: byUserOrganized,
      variables: {
        limit: 3,
        nextToken: token,
      },
    });

    const retrievedData = await matchUpsData.data.byUserOrganized;

    const imageData = await Promise.all(
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
