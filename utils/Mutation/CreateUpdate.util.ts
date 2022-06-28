import { API } from 'aws-amplify';
import { createUpdate } from '../../src/graphql/mutations';
import { Update } from '../types/Update.Type';

// EXAMPLE ARGUMENT
/*
 {
    userId: string;
    matchUpId: string;
    content: string;
};
*/

export async function createNewUpdate (updateData: Update) {
    const newUpdate = await API.graphql({
        query: createUpdate,
            variables: { input: updateData },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newUpdateData = newUpdate.data.createUpdate

    return newUpdateData;
}