import { MatchUp } from './MatchUp.Type'

export interface User {
    id: string;
    givenName: string;
    familyName: string;
    email: string;
    MatchUps: MatchUp[];
    profileImage: string;
    about: string;
  }