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
          matchUp {
            id
            title
            location
            address
            sportCategory
            skillLevel
            totalCost
            reservedCourt
            attendanceMin
            attendanceMax
            cancelled
            indoor
            image
            date
            currency
          }
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
          matchUp {
            id
            title
            location
            address
            sportCategory
            skillLevel
            totalCost
            reservedCourt
            attendanceMin
            attendanceMax
            cancelled
            indoor
            image
            date
            currency
            signups {
              items {
                id
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
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
      completed
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
          user {
            id
            givenName
            familyName
            profileImage
          }
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
      completed
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
        completed
      }
      nextToken
    }
  }
`;
