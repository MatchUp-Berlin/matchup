import { API } from 'aws-amplify';
import { createUpdate } from '../../src/graphql/mutations';
import { Update } from '../types/Update.Type';

export async function createNewUpdate(updateData: Update): Promise<Update> {
    try {
    const newUpdate = await API.graphql({
        query: createUpdate,
        variables: { input: updateData },
        // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });
    console.log(newUpdate);
    const newUpdateData = newUpdate.data.createUpdate;
    return newUpdateData;
    } catch (error) {
        throw error;
    }
}
