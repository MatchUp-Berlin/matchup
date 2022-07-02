import { API, Storage } from 'aws-amplify';
import { getMatchUp } from '../../src/graphql/queries';
import { MatchUp } from '../types/MatchUp.Type';

//EXAMPLE ARGUMENT
//"ceb7d85e-021e-4657-90a0-e3e2f98bcc7c"

export async function getMatchUpById(id: string): Promise<MatchUp> {
  try {
    const matchUpData = await API.graphql({
      query: getMatchUp,
      variables: { id: id },
      // authMode: 'AMAZON_COGNITO_USER_POOLS'
    });

    const retrievedMatchUpData = matchUpData.data.getMatchUp;

    /* Fill with Image data */
    retrievedMatchUpData.image = await Storage.get(retrievedMatchUpData.id);

    /* Fill with Address data */
    retrievedMatchUpData.address = JSON.parse(retrievedMatchUpData.address);

    return retrievedMatchUpData;
  } catch (error) {
    console.log(error);
    throw error;
  }
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
coordinates: [-73.98597609730648, 40.751874635721734]
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
            "user": {},
            "matchUp": {},
            "content": "hello there",
            "_deleted": null,
            "createdAt": "2022-06-28T17:11:34.637Z",
            "updatedAt": "2022-06-28T17:11:34.637Z"
          },
          {
            "id": "08c7ac0d-56f0-407d-80f1-c2ee3ff963f5",
            "matchUpId": "b7e5324c-33cc-42c9-8474-26d2ccd46031",
            "userId": "7cd9a4a7-f434-4668-8bb8-d3b0187cdbf3",
            "user": {},
            "matchUp": {},
            "content": "banana pancake",
            "_deleted": null,
            "createdAt": "2022-06-28T17:33:13.206Z",
            "updatedAt": "2022-06-28T17:33:13.206Z"
          }
signups: {items: Array(0), nextToken: null, startedAt: null}
_deleted: null
_lastChangedAt: 1656344032466
_version: 1
}

*/
