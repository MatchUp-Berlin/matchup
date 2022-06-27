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
