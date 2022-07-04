import { API } from 'aws-amplify';
import { createOrganized } from '../../src/graphql/mutations';
import { Organized } from '../types/Organized.Type';
import { getUserById } from '../Query/getUserById.util';

export async function createNewOrganized (organizedData: Organized): Promise<Organized | string> {
    try {
        const queryUser = await getUserById(organizedData.userId);
    if ((queryUser.organized.items.filter(el => el.matchUpId === organizedData.matchUpId)).length > 0) {
        return 'there was an error'
    }
        const newOrganized = await API.graphql({
            query: createOrganized,
            variables: { input: organizedData },
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        const newWatchListData = newOrganized.data.createWatchList
        return newWatchListData;
    } catch (error) {
        throw error;
    }
}