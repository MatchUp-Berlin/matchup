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
      "updates": {
        "items": [
          {
            "id": "1d89a6cd-45fb-493d-abc0-e8af0363ca58",
            "matchUpId": "b7e5324c-33cc-42c9-8474-26d2ccd46031",
            "userId": "7cd9a4a7-f434-4668-8bb8-d3b0187cdbf3",
            "content": "hello there",
            "_deleted": null,
            "createdAt": "2022-06-28T17:11:34.637Z",
            "updatedAt": "2022-06-28T17:11:34.637Z"
          },
          {
            "id": "08c7ac0d-56f0-407d-80f1-c2ee3ff963f5",
            "matchUpId": "b7e5324c-33cc-42c9-8474-26d2ccd46031",
            "userId": "7cd9a4a7-f434-4668-8bb8-d3b0187cdbf3",
            "content": "banana pancake",
            "_deleted": null,
            "createdAt": "2022-06-28T17:33:13.206Z",
            "updatedAt": "2022-06-28T17:33:13.206Z"
          }
users: {items: Array(0), nextToken: null, startedAt: null}
_deleted: null
_lastChangedAt: 1656344032466
_version: 1
}

*/