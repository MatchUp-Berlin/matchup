import { MatchUp } from './MatchUp.Type';
import { User } from './User.Type';

export interface SignUp {
  id?: string;
  userId: string;
  matchUpId: string;
  user?: User;
  matchUp?: MatchUp;
  attended?: boolean;
}

export interface SignUpsReturn {
  items: SignUp[];
  nextToken: string | null;
  startedAt: string | null;
}
