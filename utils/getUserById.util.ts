import { API } from 'aws-amplify';
import { getUser } from '../src/graphql/queries';
import { User } from './types/User.Type';

export async function getUserById (id: Object) {
    console.log(id)
    const userData = await API.graphql({
        query: getUser,
            variables: id,
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const retrievedUserData = userData.data

    console.log(retrievedUserData);

    return retrievedUserData;
}