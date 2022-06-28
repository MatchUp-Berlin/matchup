import { API } from 'aws-amplify';
import { byUser } from '../../src/graphql/queries';

//EXAMPLE ARGUMENT
// "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"

export async function getUserMatchUps (id: string) {
    const userData = await API.graphql({
        query: byUser,
            variables: { userId: id },
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const retrievedUserData = userData.data.byUser

    console.log(retrievedUserData);

    return retrievedUserData;
}

/*
EXAMPLE RESPONSE

[
    {
        attended: false
        createdAt: "2022-06-27T18:12:02.914Z"
        id: "4f816348-569a-49f0-bf8a-b5d8f16b07e2"
        matchUp: {id: '1367ec81-1fb2-449a-b97e-faa879d1a36c', title: 'banana', location: 'berlinnn', organizer: '54955977-c461-4943-9e66-288b3ba065ba', sportCategory: 'sportball', …}
        matchUpId: "1367ec81-1fb2-449a-b97e-faa879d1a36c"
        updatedAt: "2022-06-27T18:12:02.914Z"
        user: {id: 'ceb7d85e-021e-4657-90a0-e3e2f98bcc7c', givenName: 'bob', familyName: 'sveltee', email: 'bob@gmail.com', profileImage: null, …}
        userId: "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"
        _deleted: null
        _lastChangedAt: 1656353522941
        _version: 1
    },
    {
        attended: true
        createdAt: "2022-06-27T18:12:02.914Z"
        id: "4f816348-569a-49f0-bf8a-b5d8f16b07e2"
        matchUp: {id: '32141241-1fb2-449a-b97e-faa879d1a36c', title: 'sport even', location: 'mars', organizer: '54955977-c461-4943-9e66-288b3ba065ba', sportCategory: 'football', …}
        matchUpId: "32141241-1fb2-449a-b97e-faa879d1a36c"
        updatedAt: "2022-06-27T18:12:02.914Z"
        user: {id: 'ceb7d85e-021e-4657-90a0-e3e2f98bcc7c', givenName: 'bob', familyName: 'sveltee', email: 'bob@gmail.com', profileImage: null, …}
        userId: "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"
        _deleted: null
        _lastChangedAt: 1656353522941
        _version: 1
    }
]

*/