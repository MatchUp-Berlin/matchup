import { API } from 'aws-amplify';
import { createMatchUpMutation, createMatchUpUserMutation } from '../src/graphql/custom';
import { MatchUpUser } from './types/MatchUpUser.Type';
import { MatchUp } from './types/MatchUp.Type';
import { User } from './types/User.Type';

export async function createMatchUp (matchUpData: MatchUp) {
    const newMatchUp = await API.graphql({
        query: createMatchUpMutation,
            variables: { input: matchUpData },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newMatchUpData = newMatchUp.data.createMatchUp

    const matchUpUserData = {
            matchUpUserMatchUpUsersId: newMatchUpData.organizer,
            matchUpUserUserMatchUpsId: newMatchUpData.id
    }

    const matchUpUser = await API.graphql({
        query: createMatchUpUserMutation,
            variables: { input: matchUpUserData }
    })

    return newMatchUpData;
}