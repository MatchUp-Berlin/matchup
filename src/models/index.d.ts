import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MatchUpUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MatchUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMatchUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MatchUpUser {
  readonly id: string;
  readonly MatchUpUsers?: User | null;
  readonly UserMatchUps?: MatchUp | null;
  readonly attended?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly matchUpUserMatchUpUsersId?: string | null;
  readonly matchUpUserUserMatchUpsId?: string | null;
  constructor(init: ModelInit<MatchUpUser, MatchUpUserMetaData>);
  static copyOf(source: MatchUpUser, mutator: (draft: MutableModel<MatchUpUser, MatchUpUserMetaData>) => MutableModel<MatchUpUser, MatchUpUserMetaData> | void): MatchUpUser;
}

export declare class User {
  readonly id: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly email: string;
  readonly MatchUps?: (UserMatchUp | null)[] | null;
  readonly profileImage?: string | null;
  readonly about?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class MatchUp {
  readonly id: string;
  readonly title: string;
  readonly users?: (UserMatchUp | null)[] | null;
  readonly location: string;
  readonly organizer: string;
  readonly sportCategory: string;
  readonly skillLevel?: string | null;
  readonly totalCost?: number | null;
  readonly reservedCourt?: boolean | null;
  readonly attendanceMin?: number | null;
  readonly attendanceMax?: number | null;
  readonly cancelled?: boolean | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly date?: string | null;
  readonly currency?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MatchUp, MatchUpMetaData>);
  static copyOf(source: MatchUp, mutator: (draft: MutableModel<MatchUp, MatchUpMetaData>) => MutableModel<MatchUp, MatchUpMetaData> | void): MatchUp;
}

export declare class UserMatchUp {
  readonly id: string;
  readonly user: User;
  readonly matchUp: MatchUp;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserMatchUp, UserMatchUpMetaData>);
  static copyOf(source: UserMatchUp, mutator: (draft: MutableModel<UserMatchUp, UserMatchUpMetaData>) => MutableModel<UserMatchUp, UserMatchUpMetaData> | void): UserMatchUp;
}