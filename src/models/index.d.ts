import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MatchUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SignUpMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UpdateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WatchListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MatchUp {
  readonly id: string;
  readonly title: string;
  readonly signups?: (SignUp | null)[] | null;
  readonly location: string;
  readonly organizer: string;
  readonly sportCategory: string;
  readonly skillLevel?: string | null;
  readonly totalCost?: number | null;
  readonly reservedCourt?: boolean | null;
  readonly attendanceMin?: number | null;
  readonly attendanceMax?: number | null;
  readonly cancelled?: boolean | null;
  readonly indoor?: boolean | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly date?: string | null;
  readonly currency?: string | null;
  readonly updates?: (Update | null)[] | null;
  readonly WatchList?: (WatchList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MatchUp, MatchUpMetaData>);
  static copyOf(source: MatchUp, mutator: (draft: MutableModel<MatchUp, MatchUpMetaData>) => MutableModel<MatchUp, MatchUpMetaData> | void): MatchUp;
}

export declare class SignUp {
  readonly id: string;
  readonly user?: User | null;
  readonly matchUp?: MatchUp | null;
  readonly attended?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SignUp, SignUpMetaData>);
  static copyOf(source: SignUp, mutator: (draft: MutableModel<SignUp, SignUpMetaData>) => MutableModel<SignUp, SignUpMetaData> | void): SignUp;
}

export declare class User {
  readonly id: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly email: string;
  readonly signups?: (SignUp | null)[] | null;
  readonly profileImage?: string | null;
  readonly about?: string | null;
  readonly updates?: (Update | null)[] | null;
  readonly WatchList?: (WatchList | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Update {
  readonly id: string;
  readonly user?: User | null;
  readonly matchUp?: MatchUp | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Update, UpdateMetaData>);
  static copyOf(source: Update, mutator: (draft: MutableModel<Update, UpdateMetaData>) => MutableModel<Update, UpdateMetaData> | void): Update;
}

export declare class WatchList {
  readonly id: string;
  readonly user?: User | null;
  readonly matchUp?: MatchUp | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WatchList, WatchListMetaData>);
  static copyOf(source: WatchList, mutator: (draft: MutableModel<WatchList, WatchListMetaData>) => MutableModel<WatchList, WatchListMetaData> | void): WatchList;
}