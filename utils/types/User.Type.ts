import { MatchUp } from './MatchUp.Type'
import { Update } from './Update.Type'

export interface User {
    id?: string;
    givenName: string;
    familyName: string;
    email: string;
    matchUps: MatchUp[];
    profileImage: string;
    about: string;
    updates: Update[];
  }