import { API } from 'aws-amplify';
import { createMatchUpUser } from '../src/graphql/mutations';
import { MatchUpUser } from './types/MatchUpUser.Type';

export async function addUserToMatchUp (MatchUpUserData: MatchUpUser) {
    const newMatchUpUser = await API.graphql({
        query: createMatchUpUser,
            variables: { input: MatchUpUserData },
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newSignedUpUser = newMatchUpUser.data.createMatchUpUser;

    console.log(newSignedUpUser);


    return newSignedUpUser;
}