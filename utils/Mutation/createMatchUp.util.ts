import { API } from 'aws-amplify';
import { createMatchUp } from '../../src/graphql/mutations';
import { CreateMatchUpInput, MatchUp } from '../types/MatchUp.Type';
import { Organized } from '../types/Organized.Type';
import { createNewOrganized } from './createOrganized.util'
import { addUserToMatchUp } from './addUserToMatchUp.util';

export async function createNewMatchUp(matchUpData: CreateMatchUpInput): Promise<MatchUp> {
  try {
    matchUpData.address = JSON.stringify(matchUpData.address);
    const newMatchUp = await API.graphql({
      query: createMatchUp,
      variables: { input: matchUpData },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    const newMatchUpData = newMatchUp.data.createMatchUp;
    const matchUpUserData = {
      userId: newMatchUpData.organizerId,
      matchUpId: newMatchUpData.id,
      attended: false,
    };
    addUserToMatchUp(matchUpUserData);
    createNewOrganized({userId: matchUpUserData.userId, matchUpId: matchUpUserData.matchUpId});

    return newMatchUpData;
  } catch (error) {
    throw error;
  }
}
