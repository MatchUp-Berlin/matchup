import { API } from 'aws-amplify';
import { createWatchList } from '../../src/graphql/mutations';
import { WatchList } from '../types/WatchList.Type';
export async function createNewWatchList (watchListData: WatchList): Promise<WatchList> {
    try {
    const newWatchList = await API.graphql({
        query: createWatchList,
            variables: { input: watchListData },
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newWatchListData = newWatchList.data.createWatchList
    return newWatchListData;
    } catch (error) {
        throw error;
    }
}