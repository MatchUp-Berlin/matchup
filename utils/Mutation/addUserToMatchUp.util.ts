import { API } from 'aws-amplify';
import { createSignUp } from '../../src/graphql/mutations';
import { SignUp } from '../types/SignUp.Type';

export async function addUserToMatchUp (SignUpData: SignUp) {
    try {
    const newSignUp = await API.graphql({
        query: createSignUp,
            variables: { input: SignUpData },
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const newSignedUpUser = newSignUp.data.createSignUp;
    console.log(newSignedUpUser);
    return newSignedUpUser;
    } catch (error) {
        throw error;
    }
}