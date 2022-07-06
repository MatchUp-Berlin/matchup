import { API, Storage } from 'aws-amplify';
import { getMatchUp } from '../../src/graphql/custom';
import { MatchUp } from '../types/MatchUp.Type';

//EXAMPLE ARGUMENT
//"ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"

export async function getMatchUpById(id: string): Promise<MatchUp> {
  try {
    const matchUpData = await API.graphql({
      query: getMatchUp,
      variables: { id: id },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });

    const retrievedMatchUpData = matchUpData.data.getMatchUp;
    const signups = retrievedMatchUpData.signups.items;
    const organizer = retrievedMatchUpData.organizer;

    /* Fill with Image data */
    retrievedMatchUpData.image = await Storage.get(retrievedMatchUpData.id);
    organizer.profileImage = await Storage.get(organizer.id);
    if (signups && signups.length > 0) {
      await Promise.all(
        signups.map(async (signup) => {
          signup.user.profileImage = await Storage.get(signup.userId);
          return;
        })
      );
    }

    /* Fill with Address data */
    retrievedMatchUpData.address = JSON.parse(retrievedMatchUpData.address);

    return retrievedMatchUpData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
