/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignUp = /* GraphQL */ `
  mutation CreateSignUp(
    $input: CreateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    createSignUp(input: $input, condition: $condition) {
      id
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
        WatchList {
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
        WatchList {
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
      matchUpSignupsId
      userSignupsId
    }
  }
`;
export const updateSignUp = /* GraphQL */ `
  mutation UpdateSignUp(
    $input: UpdateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    updateSignUp(input: $input, condition: $condition) {
      id
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
        WatchList {
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
        WatchList {
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
      matchUpSignupsId
      userSignupsId
    }
  }
`;
export const deleteSignUp = /* GraphQL */ `
  mutation DeleteSignUp(
    $input: DeleteSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    deleteSignUp(input: $input, condition: $condition) {
      id
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
        WatchList {
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
        WatchList {
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
      matchUpSignupsId
      userSignupsId
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
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
export const updateMatchUp = /* GraphQL */ `
  mutation UpdateMatchUp(
    $input: UpdateMatchUpInput!
    $condition: ModelMatchUpConditionInput
  ) {
    updateMatchUp(input: $input, condition: $condition) {
      id
      title
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
export const deleteMatchUp = /* GraphQL */ `
  mutation DeleteMatchUp(
    $input: DeleteMatchUpInput!
    $condition: ModelMatchUpConditionInput
  ) {
    deleteMatchUp(input: $input, condition: $condition) {
      id
      title
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
      signups {
        items {
          id
          attended
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          matchUpSignupsId
          userSignupsId
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
      WatchList {
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
export const createUpdate = /* GraphQL */ `
  mutation CreateUpdate(
    $input: CreateUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    createUpdate(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
export const updateUpdate = /* GraphQL */ `
  mutation UpdateUpdate(
    $input: UpdateUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    updateUpdate(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
export const deleteUpdate = /* GraphQL */ `
  mutation DeleteUpdate(
    $input: DeleteUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    deleteUpdate(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
export const createWatchList = /* GraphQL */ `
  mutation CreateWatchList(
    $input: CreateWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    createWatchList(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
export const updateWatchList = /* GraphQL */ `
  mutation UpdateWatchList(
    $input: UpdateWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    updateWatchList(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
export const deleteWatchList = /* GraphQL */ `
  mutation DeleteWatchList(
    $input: DeleteWatchListInput!
    $condition: ModelWatchListConditionInput
  ) {
    deleteWatchList(input: $input, condition: $condition) {
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
        WatchList {
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
        WatchList {
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
