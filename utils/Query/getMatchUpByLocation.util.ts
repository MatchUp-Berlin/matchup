import { API } from 'aws-amplify';
import { listMatchUps } from '../../src/graphql/queries';

//EXAMPLE ARGUMENT
// "Berlin"

export async function getMatchUpByLocation (city: string) {
    let cityFilter = {
        location: {
            eq: city
        }
    }

    const matchUpData = await API.graphql({
        query: listMatchUps,
            variables: { filter: cityFilter},
            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    const retrievedMatchUpData = matchUpData.data.getMatchUp

    console.log(retrievedMatchUpData);

    return retrievedMatchUpData;
}