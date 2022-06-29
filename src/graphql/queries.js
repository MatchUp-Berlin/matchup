/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatchUp = /* GraphQL */ `
  query GetMatchUp($id: ID!) {
    getMatchUp(id: $id) {
      id
      title
      signups {
        items {
          id
          userId
          matchUpId
          attended
          createdAt
          updatedAt
        }
        nextToken
      }
      city
      location
      organizer
      sportCategory
      skillLevel
      totalCost
      reservedCourt
      attendanceMin
      attendanceMax
      cancelled
      indoor
      description
      image
      date
      currency
      updates {
        items {
          id
          userId
          matchUpId
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      watchList {
        items {
          id
          userId
          matchUpId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMatchUps = /* GraphQL */ `
  query ListMatchUps(
    $filter: ModelMatchUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        signups {
          nextToken
        }
        city
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      givenName
      familyName
      email
      signups {
        items {
          id
          userId
          matchUpId
          attended
          createdAt
          updatedAt
        }
        nextToken
      }
      profileImage
      about
      updates {
        items {
          id
          userId
          matchUpId
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      watchList {
        items {
          id
          userId
          matchUpId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        givenName
        familyName
        email
        signups {
          nextToken
        }
        profileImage
        about
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSignUp = /* GraphQL */ `
  query GetSignUp($id: ID!) {
    getSignUp(id: $id) {
      id
      userId
      matchUpId
      user {
        id
        givenName
        familyName
        email
        signups {
          nextToken
        }
        profileImage
        about
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchUp {
        id
        title
        signups {
          nextToken
        }
        city
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      attended
      createdAt
      updatedAt
    }
  }
`;
export const listSignUps = /* GraphQL */ `
  query ListSignUps(
    $filter: ModelSignUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        matchUpId
        user {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        matchUp {
          id
          title
          city
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          indoor
          description
          image
          date
          currency
          createdAt
          updatedAt
        }
        attended
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUpdate = /* GraphQL */ `
  query GetUpdate($id: ID!) {
    getUpdate(id: $id) {
      id
      userId
      matchUpId
      user {
        id
        givenName
        familyName
        email
        signups {
          nextToken
        }
        profileImage
        about
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchUp {
        id
        title
        signups {
          nextToken
        }
        city
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listUpdates = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        matchUpId
        user {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        matchUp {
          id
          title
          city
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          indoor
          description
          image
          date
          currency
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWatchList = /* GraphQL */ `
  query GetWatchList($id: ID!) {
    getWatchList(id: $id) {
      id
      userId
      matchUpId
      user {
        id
        givenName
        familyName
        email
        signups {
          nextToken
        }
        profileImage
        about
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchUp {
        id
        title
        signups {
          nextToken
        }
        city
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
        }
        watchList {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWatchLists = /* GraphQL */ `
  query ListWatchLists(
    $filter: ModelWatchListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWatchLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        matchUpId
        user {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        matchUp {
          id
          title
          city
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          indoor
          description
          image
          date
          currency
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
