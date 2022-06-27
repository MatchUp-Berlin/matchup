import { API } from 'aws-amplify';
import { createMatchUp } from '../src/graphql/mutations';
import { MatchUp } from './types/MatchUp.Type';
import { addUserToMatchUp } from './addUserToMatchUp.util';

export async function createNewMatchUp (matchUpData: MatchUp) {
    const newMatchUp = await API.graphql({
        query: createMatchUp,
            variables: { input: matchUpData },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newMatchUpData = newMatchUp.data.createMatchUp

    const matchUpUserData = {
        userId: newMatchUpData.organizer,
        matchUpId: newMatchUpData.id,
        attended: false
    }

    addUserToMatchUp(matchUpUserData);
    // const matchUpUser = await API.graphql({
    //     query: createMatchUpUserMutation,
    //         variables: { input: matchUpUserData }
    // })

    return newMatchUpData;
}