import { API } from 'aws-amplify';
import { createWatchList } from '../../src/graphql/mutations';
import { WatchList } from '../types/WatchList.Type';
import { getUserById } from '../Query/getUserById.util';

export async function createNewWatchList (watchListData: WatchList): Promise<WatchList | string> {
    try {
    const queryUser = await getUserById(watchListData.userId);
    if ((queryUser.watchList.items.filter(el => el.matchUpId === watchListData.matchUpId)).length > 0) {
        return 'this MatchUp is already on your Watch List'
    }
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