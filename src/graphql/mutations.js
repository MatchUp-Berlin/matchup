/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMatchUpUser = /* GraphQL */ `
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
export const updateMatchUpUser = /* GraphQL */ `
  mutation UpdateMatchUpUser(
    $input: UpdateMatchUpUserInput!
    $condition: ModelMatchUpUserConditionInput
  ) {
    updateMatchUpUser(input: $input, condition: $condition) {
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
export const deleteMatchUpUser = /* GraphQL */ `
  mutation DeleteMatchUpUser(
    $input: DeleteMatchUpUserInput!
    $condition: ModelMatchUpUserConditionInput
  ) {
    deleteMatchUpUser(input: $input, condition: $condition) {
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
export const createMatchUp = /* GraphQL */ `
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
export const updateMatchUp = /* GraphQL */ `
  mutation UpdateMatchUp(
    $input: UpdateMatchUpInput!
    $condition: ModelMatchUpConditionInput
  ) {
    updateMatchUp(input: $input, condition: $condition) {
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
export const deleteMatchUp = /* GraphQL */ `
  mutation DeleteMatchUp(
    $input: DeleteMatchUpInput!
    $condition: ModelMatchUpConditionInput
  ) {
    deleteMatchUp(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserMatchUp = /* GraphQL */ `
  mutation CreateUserMatchUp(
    $input: CreateUserMatchUpInput!
    $condition: ModelUserMatchUpConditionInput
  ) {
    createUserMatchUp(input: $input, condition: $condition) {
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
export const updateUserMatchUp = /* GraphQL */ `
  mutation UpdateUserMatchUp(
    $input: UpdateUserMatchUpInput!
    $condition: ModelUserMatchUpConditionInput
  ) {
    updateUserMatchUp(input: $input, condition: $condition) {
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
export const deleteUserMatchUp = /* GraphQL */ `
  mutation DeleteUserMatchUp(
    $input: DeleteUserMatchUpInput!
    $condition: ModelUserMatchUpConditionInput
  ) {
    deleteUserMatchUp(input: $input, condition: $condition) {
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
