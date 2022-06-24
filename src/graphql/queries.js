/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatchUpUser = /* GraphQL */ `
  query GetMatchUpUser($id: ID!) {
    getMatchUpUser(id: $id) {
      id
      MatchUpUsers {
        id
        givenName
        familyName
        email
        MatchUps {
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
      UserMatchUps {
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
      matchUpUserMatchUpUsersId
      matchUpUserUserMatchUpsId
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
        MatchUpUsers {
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
        UserMatchUps {
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
        matchUpUserMatchUpUsersId
        matchUpUserUserMatchUpsId
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
        MatchUpUsers {
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
        UserMatchUps {
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
        matchUpUserMatchUpUsersId
        matchUpUserUserMatchUpsId
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
          matchUpID
          userID
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
      MatchUps {
        items {
          id
          matchUpID
          userID
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
        MatchUps {
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
        MatchUps {
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
export const getUserMatchUp = /* GraphQL */ `
  query GetUserMatchUp($id: ID!) {
    getUserMatchUp(id: $id) {
      id
      matchUpID
      userID
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
      user {
        id
        givenName
        familyName
        email
        MatchUps {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserMatchUps = /* GraphQL */ `
  query ListUserMatchUps(
    $filter: ModelUserMatchUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMatchUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matchUpID
        userID
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
export const syncUserMatchUps = /* GraphQL */ `
  query SyncUserMatchUps(
    $filter: ModelUserMatchUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserMatchUps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        matchUpID
        userID
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
