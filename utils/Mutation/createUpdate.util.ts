import { API } from 'aws-amplify';
import { createUpdate } from '../../src/graphql/mutations';
import { Update, CreateUpdateInput } from '../types/Update.Type';

export async function createNewUpdate(updateData: CreateUpdateInput): Promise<Update> {
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
