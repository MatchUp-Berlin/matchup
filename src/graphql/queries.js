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
      location
      address
      organizerId
      organizer {
        id
        givenName
        familyName
        email
        signups {
          nextToken
        }
        organized {
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
      sportCategory
      skillLevel
      totalCost
      reservedCourt
      attendanceMin
      attendanceMax
      cancelled
      completed
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
      organized {
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
        location
        address
        organizerId
        organizer {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        completed
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
        organized {
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
      organized {
        items {
          id
          userId
          matchUpId
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
        organized {
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
        organized {
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
        location
        address
        organizerId
        organizer {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        completed
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
        organized {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
        organized {
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
        location
        address
        organizerId
        organizer {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        completed
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
        organized {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
        organized {
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
        location
        address
        organizerId
        organizer {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        completed
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
        organized {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
export const getOrganized = /* GraphQL */ `
  query GetOrganized($id: ID!) {
    getOrganized(id: $id) {
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
        organized {
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
        location
        address
        organizerId
        organizer {
          id
          givenName
          familyName
          email
          profileImage
          about
          createdAt
          updatedAt
        }
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        completed
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
        organized {
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
export const listOrganizeds = /* GraphQL */ `
  query ListOrganizeds(
    $filter: ModelOrganizedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
export const byUserOrganized = /* GraphQL */ `
  query ByUserOrganized(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUserOrganized(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
export const byMatchUpOrganized = /* GraphQL */ `
  query ByMatchUpOrganized(
    $matchUpId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrganizedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMatchUpOrganized(
      matchUpId: $matchUpId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          location
          address
          organizerId
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          completed
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
