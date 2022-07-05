import { WatchList } from './../types/WatchList.Type';
import { API, Storage } from 'aws-amplify';
import { getUser } from '../../src/graphql/custom';
import { User } from '../types/User.Type';

export async function getUserById(id: string): Promise<User> {
  try {
    const userData = await API.graphql({
      query: getUser,
      variables: { id: id },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    const retrievedUserData = userData.data.getUser;

    // Fill pictures for user
    if (retrievedUserData) {
      console.log(retrievedUserData)
      retrievedUserData.profileImage = await Storage.get(id);
    }

    // Fill pictures for signup items
    if (retrievedUserData && retrievedUserData.signups.items.length > 0) {
      await Promise.all(
        retrievedUserData.signups.items.map(async (signup: WatchList) => {
          signup.matchUp.image = await Storage.get(signup.matchUpId);
          return;
        })
      );
      retrievedUserData.signups.items.forEach((signup: WatchList) => {
        signup.matchUp.address = JSON.parse(signup.matchUp.address as string);
      });
    }

    // Fill pictures for watchlist items
    if (retrievedUserData && retrievedUserData.watchList.items.length > 0) {
      await Promise.all(
        retrievedUserData.watchList.items.map(async (watchList: WatchList) => {
          watchList.matchUp.image = await Storage.get(watchList.matchUpId);
          return WatchList;
        })
      );
      retrievedUserData.watchList.items.forEach((watchList: WatchList) => {
        watchList.matchUp.address = JSON.parse(watchList.matchUp.address as string);
      });
    }

    return retrievedUserData;
  } catch (error) {
    throw error;
  }
}
