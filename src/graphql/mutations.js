/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createSignUp = /* GraphQL */ `
  mutation CreateSignUp(
    $input: CreateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    createSignUp(input: $input, condition: $condition) {
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
export const updateSignUp = /* GraphQL */ `
  mutation UpdateSignUp(
    $input: UpdateSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    updateSignUp(input: $input, condition: $condition) {
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
export const deleteSignUp = /* GraphQL */ `
  mutation DeleteSignUp(
    $input: DeleteSignUpInput!
    $condition: ModelSignUpConditionInput
  ) {
    deleteSignUp(input: $input, condition: $condition) {
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
export const createOrganized = /* GraphQL */ `
  mutation CreateOrganized(
    $input: CreateOrganizedInput!
    $condition: ModelOrganizedConditionInput
  ) {
    createOrganized(input: $input, condition: $condition) {
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
export const updateOrganized = /* GraphQL */ `
  mutation UpdateOrganized(
    $input: UpdateOrganizedInput!
    $condition: ModelOrganizedConditionInput
  ) {
    updateOrganized(input: $input, condition: $condition) {
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
export const deleteOrganized = /* GraphQL */ `
  mutation DeleteOrganized(
    $input: DeleteOrganizedInput!
    $condition: ModelOrganizedConditionInput
  ) {
    deleteOrganized(input: $input, condition: $condition) {
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
