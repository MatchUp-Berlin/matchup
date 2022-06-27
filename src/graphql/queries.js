/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatchUpUser = /* GraphQL */ `
  query GetMatchUpUser($id: ID!) {
    getMatchUpUser(id: $id) {
      id
      userId
      matchUpId
      user {
        id
        givenName
        familyName
        email
        matchUps {
          nextToken
          startedAt
        }
        profileImage
        about
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      matchUp {
        id
        title
        users {
          nextToken
          startedAt
        }
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        description
        image
        date
        currency
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      attended
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMatchUpUsers = /* GraphQL */ `
  query ListMatchUpUsers(
    $filter: ModelMatchUpUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchUpUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
        }
        matchUp {
          id
          title
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          description
          image
          date
          currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attended
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMatchUpUsers = /* GraphQL */ `
  query SyncMatchUpUsers(
    $filter: ModelMatchUpUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMatchUpUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        matchUp {
          id
          title
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          description
          image
          date
          currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attended
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const byUser = /* GraphQL */ `
  query ByUser(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMatchUpUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUser(
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
          _version
          _deleted
          _lastChangedAt
        }
        matchUp {
          id
          title
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          description
          image
          date
          currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attended
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const byMatchUp = /* GraphQL */ `
  query ByMatchUp(
    $matchUpId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMatchUpUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byMatchUp(
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
          _version
          _deleted
          _lastChangedAt
        }
        matchUp {
          id
          title
          location
          organizer
          sportCategory
          skillLevel
          totalCost
          reservedCourt
          attendanceMin
          attendanceMax
          cancelled
          description
          image
          date
          currency
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attended
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMatchUp = /* GraphQL */ `
  query GetMatchUp($id: ID!) {
    getMatchUp(id: $id) {
      id
      title
      users {
        items {
          id
          userId
          matchUpId
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      location
      organizer
      sportCategory
      skillLevel
      totalCost
      reservedCourt
      attendanceMin
      attendanceMax
      cancelled
      description
      image
      date
      currency
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        users {
          nextToken
          startedAt
        }
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        description
        image
        date
        currency
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMatchUps = /* GraphQL */ `
  query SyncMatchUps(
    $filter: ModelMatchUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMatchUps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        users {
          nextToken
          startedAt
        }
        location
        organizer
        sportCategory
        skillLevel
        totalCost
        reservedCourt
        attendanceMin
        attendanceMax
        cancelled
        description
        image
        date
        currency
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      matchUps {
        items {
          id
          userId
          matchUpId
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      profileImage
      about
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        matchUps {
          nextToken
          startedAt
        }
        profileImage
        about
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        givenName
        familyName
        email
        matchUps {
          nextToken
          startedAt
        }
        profileImage
        about
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
