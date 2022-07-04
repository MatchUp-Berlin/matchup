/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatchUp = /* GraphQL */ `
  subscription OnCreateMatchUp {
    onCreateMatchUp {
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
export const onUpdateMatchUp = /* GraphQL */ `
  subscription OnUpdateMatchUp {
    onUpdateMatchUp {
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
export const onDeleteMatchUp = /* GraphQL */ `
  subscription OnDeleteMatchUp {
    onDeleteMatchUp {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSignUp = /* GraphQL */ `
  subscription OnCreateSignUp {
    onCreateSignUp {
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
export const onUpdateSignUp = /* GraphQL */ `
  subscription OnUpdateSignUp {
    onUpdateSignUp {
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
export const onDeleteSignUp = /* GraphQL */ `
  subscription OnDeleteSignUp {
    onDeleteSignUp {
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
export const onCreateUpdate = /* GraphQL */ `
  subscription OnCreateUpdate {
    onCreateUpdate {
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
export const onUpdateUpdate = /* GraphQL */ `
  subscription OnUpdateUpdate {
    onUpdateUpdate {
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
export const onDeleteUpdate = /* GraphQL */ `
  subscription OnDeleteUpdate {
    onDeleteUpdate {
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
export const onCreateWatchList = /* GraphQL */ `
  subscription OnCreateWatchList {
    onCreateWatchList {
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
export const onUpdateWatchList = /* GraphQL */ `
  subscription OnUpdateWatchList {
    onUpdateWatchList {
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
export const onDeleteWatchList = /* GraphQL */ `
  subscription OnDeleteWatchList {
    onDeleteWatchList {
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
export const onCreateOrganized = /* GraphQL */ `
  subscription OnCreateOrganized {
    onCreateOrganized {
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
export const onUpdateOrganized = /* GraphQL */ `
  subscription OnUpdateOrganized {
    onUpdateOrganized {
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
export const onDeleteOrganized = /* GraphQL */ `
  subscription OnDeleteOrganized {
    onDeleteOrganized {
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
