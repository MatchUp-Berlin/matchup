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

export const createMatchUpMutation = /* GraphQL */ `
  mutation CreateMatchUp(
    $input: CreateMatchUpInput!
    $condition: ModelMatchUpConditionInput
  ) {
    createMatchUp(input: $input, condition: $condition) {
      id
      title
      users {
        items {
          id
          matchUpID
          userID
          createdAt
          updatedAt
          user {
            id
            givenName
            familyName
            email
            profileImage
            about
          }
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

export const createMatchUpUserMutation = /* GraphQL */ `
  mutation CreateMatchUpUser(
    $input: CreateMatchUpUserInput!
    $condition: ModelMatchUpUserConditionInput
  ) {
    createMatchUpUser(input: $input, condition: $condition) {
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
          user {
            id
            givenName
            familyName
            email
            profileImage
            about
          }
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