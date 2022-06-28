import { API } from 'aws-amplify';
import { byMatchUp } from '../../src/graphql/queries';
import { User } from '../types/User.Type';

//EXAMPLE ARGUMENT
// { matchUpId: "1367ec81-1fb2-449a-b97e-faa879d1a36c" }

export async function getMatchUpUsers (id: Object) {
    console.log(id)
    const MatchUpData = await API.graphql({
        query: byMatchUp,
            variables: id,
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const retrievedMatchUpData = MatchUpData.data.byMatchUp

    console.log(retrievedMatchUpData);

    return retrievedMatchUpData;
}

/*
EXAMPLE RESPONSE

[
    {
        attended: false
        createdAt: "2022-06-27T18:12:02.914Z"
        id: "4f816348-569a-49f0-bf8a-b5d8f16b07e2"
        matchUp: {id: '1367ec81-1fb2-449a-b97e-faa879d1a36c', title: 'sport event', location: 'berlinnn', organizer: '54955977-c461-4943-9e66-288b3ba065ba', sportCategory: 'sportball', …}
        matchUpId: "1367ec81-1fb2-449a-b97e-faa879d1a36c"
        updatedAt: "2022-06-27T18:12:02.914Z"
        user: {id: 'ceb7d85e-021e-4657-90a0-e3e2f98bcc7c', givenName: 'bob', familyName: 'sveltee', email: 'bob@gmail.com', profileImage: null, …}
        userId: "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"
        _deleted: null
        _lastChangedAt: 1656353522941
        _version: 1
    },
    {
        attended: false
        createdAt: "2022-06-27T18:10:38.155Z"
        id: "3dd29fc0-a183-4ee7-a5a8-23712ab35fa6"
        matchUp: {id: '1367ec81-1fb2-449a-b97e-faa879d1a36c', title: 'sport event', location: 'berlinnn', organizer: '54955977-c461-4943-9e66-288b3ba065ba', sportCategory: 'sportball', …}
        matchUpId: "1367ec81-1fb2-449a-b97e-faa879d1a36c"
        updatedAt: "2022-06-27T18:10:38.155Z"
        user: {id: '54955977-c461-4943-9e66-288b3ba065ba', givenName: 'sammy', familyName: 'svelteee', email: 'sammy@googlemail.com', profileImage: null, …}
        userId: "54955977-c461-4943-9e66-288b3ba065ba"
        _deleted: null
        _lastChangedAt: 1656353438182
        _version: 1
    }
]

*/