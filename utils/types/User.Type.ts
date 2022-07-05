import { SignUp } from './SignUp.Type';
import { Update } from './Update.Type';
import { WatchList, WatchListsReturn } from './WatchList.Type';
import { Organized } from './Organized.Type';
import { SignUpsReturn } from './SignUp.Type';

export interface User {
  id?: string;
  givenName: string;
  familyName: string;
  email: string;
  signups: SignUpsReturn;
  profileImage: string;
  about: string;
  createdAt: string;
  updates: Update[];
  watchList: WatchListsReturn;
  organized: Organized[];
  attended?: boolean;
  signup?: SignUp;
}

export interface UsersReturn {
  items: User[];
  nextToken: string | null;
  startedAt: string | null;
}
