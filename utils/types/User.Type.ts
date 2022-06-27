import { MatchUp } from './MatchUp.Type';

export interface User {
  id?: string;
  givenName: string;
  familyName: string;
  email: string;
  matchUps: MatchUp[];
  profileImage: string;
  about: string;
}
