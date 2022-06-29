import { API } from 'aws-amplify';
import { deleteWatchList } from '../../src/graphql/mutations';
import { WatchList } from '../types/WatchList.Type';
import { getUserById } from '../Query/getUserById.util';

export async function removeWatchList (watchListData: WatchList): Promise<WatchList | string> {
    try {
    const queryUser = await getUserById(watchListData.userId);
    const selectedWatchList = (queryUser.watchList.items.filter(el => el.matchUpId === watchListData.matchUpId));
    if (selectedWatchList.length === 0) return 'this MatchUp is not in your Watch List';
    const removeFromWatchList = await API.graphql({
        query: deleteWatchList,
            variables: { input: {id: selectedWatchList[0].id }},
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    return removeFromWatchList.data.deleteWatchList;
    } catch (error) {
        throw error;
    }
}