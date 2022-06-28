import { API } from 'aws-amplify';
import { getMatchUp } from '../../src/graphql/queries';

//EXAMPLE ARGUMENT
//"ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"

export async function getMatchUpById (id: string) {
    const matchUpData = await API.graphql({
        query: getMatchUp,

            variables: { id: id },

            // authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        console.log(matchUpData)
    const retrievedMatchUpData = matchUpData.data.getMatchUp

    console.log(retrievedMatchUpData);

    return retrievedMatchUpData;
}

/*
EXAMPLE RESPONSE

{
attendanceMax: 10
attendanceMin: 2
cancelled: false
createdAt: "2022-06-27T15:33:52.444Z"
currency: USD
date: "2022-06-27T15:33:52.444Z"
description: "its sportin time"
id: "1367ec81-1fb2-449a-b97e-faa879d1a36c"
image: "https://imageshare/image1"
location: "berlin"
organizer: "54955977-c461-4943-9e66-288b3ba065ba"
reservedCourt: false
skillLevel: "beginner"
sportCategory: "sportball"
title: "sportin at the park"
totalCost: 0
updatedAt: "2022-06-27T15:33:52.444Z"
updates: {items: Array(4), nextToken: null, startedAt: null}
users: {items: Array(0), nextToken: null, startedAt: null}
_deleted: null
_lastChangedAt: 1656344032466
_version: 1
}

*/