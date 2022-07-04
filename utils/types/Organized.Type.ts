import { User } from './User.Type';
import { MatchUp } from './MatchUp.Type';

export interface Organized {
  id?: string;
  userId: string;
  matchUpId: string;
  user?: User;
  matchUp?: MatchUp;
}

export interface OrganizedReturn {
  items: Organized[];
  nextToken: string | null;
  startedAt: string | null;
}