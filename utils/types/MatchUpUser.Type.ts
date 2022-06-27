import { MatchUp } from './MatchUp.Type'
import { User } from './User.Type'

export interface MatchUpUser {
    id: string;
    MatchUpUsers: User;
    UserMatchUps: MatchUp;
    attended: boolean;
  }