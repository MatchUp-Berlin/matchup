import { API, Storage } from 'aws-amplify';
import { byUserOrganized } from '../../src/graphql/queries';
import { OrganizedReturn, Organized } from '../types/Organized.Type';

<<<<<<< HEAD
export async function getOrganizerMatchUps(id: string, showCards: number): Promise<getMatchUpsReturn> {
=======
export async function getOrganizerMatchUps(id: string, token?: string): Promise<OrganizedReturn> {
>>>>>>> main
  try {
    const matchUpsData = await API.graphql({
      query: byUserOrganized,
      variables: {
        userId: id,
        limit: 3,
        nextToken: token,
      },
    });

    const retrievedData = await matchUpsData.data.byUserOrganized;

    await Promise.all(
      retrievedData.items.map(async (data: Organized) => {
        const headerImage = await Storage.get(data.matchUp.id);
        data.matchUp.image = headerImage;
        return data;
      })
    );

    return retrievedData;
  } catch (err) {
    throw err;
  }
}
