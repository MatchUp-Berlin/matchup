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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      watchList {
        items {
          id
          userId
          matchUpId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
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
        signups {
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
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
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
        signups {
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
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      watchList {
        items {
          id
          userId
          matchUpId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
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
        signups {
          nextToken
          startedAt
        }
        profileImage
        about
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
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
        signups {
          nextToken
          startedAt
        }
        profileImage
        about
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
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
          startedAt
        }
        profileImage
        about
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      matchUp {
        id
        title
        signups {
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
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
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
          indoor
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
export const syncSignUps = /* GraphQL */ `
  query SyncSignUps(
    $filter: ModelSignUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSignUps(
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
          indoor
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
          startedAt
        }
        profileImage
        about
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      matchUp {
        id
        title
        signups {
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
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          indoor
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
        content
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
export const syncUpdates = /* GraphQL */ `
  query SyncUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUpdates(
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
          indoor
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
        content
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
          startedAt
        }
        profileImage
        about
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      matchUp {
        id
        title
        signups {
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
        indoor
        description
        image
        date
        currency
        updates {
          nextToken
          startedAt
        }
        watchList {
          nextToken
          startedAt
        }
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
          indoor
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
export const syncWatchLists = /* GraphQL */ `
  query SyncWatchLists(
    $filter: ModelWatchListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWatchLists(
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
          indoor
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
