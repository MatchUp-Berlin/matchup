import { MatchUp } from './MatchUp.Type'
import { User } from './User.Type'

export interface MatchUpUser {
    id?: string;
    userId: string;
    matchUpId: string;
    attended: boolean;
  }