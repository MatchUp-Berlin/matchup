import { API } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';
import { User } from '../types/User.Type';

//EXAMPLE ARGUMENT
// "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"

export async function getUserById(id: string): Promise<User> {
  const userData = await API.graphql({
    query: getUser,
    variables: { id: id },
    // authMode: 'AMAZON_COGNITO_USER_POOLS'
  });
  const retrievedUserData = userData.data.getUser;

  console.log(retrievedUserData);

  return retrievedUserData;
}

/*
EXAMPLE RESPONSE

{
about: "a mean sportin machine"
createdAt: "2022-06-25T11:18:09.968Z"
email: "bob@gmail.com"
familyName: "sveltee"
givenName: "bob"
id: "ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"
signups: {items: Array(0), nextToken: null, startedAt: null}
watchList: {},
updates: {},
profileImage: null
updatedAt: "2022-06-25T11:18:09.968Z"
_deleted: null
_lastChangedAt: 1656155889990
_version: 1
}

*/
