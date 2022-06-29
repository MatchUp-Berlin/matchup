import { User } from './User.Type';
import { MatchUp } from './MatchUp.Type';

export interface WatchList {
  id?: string;
  userId: string;
  matchUpId: string;
  user?: User;
  matchUp?: MatchUp;
}

export interface WatchListsReturn {
  items: WatchList[];
  nextToken: string | null;
  startedAt: string | null;
}
