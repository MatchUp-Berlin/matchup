<<<<<<< HEAD:utils/types/SignUp.Type.ts
import { MatchUp } from './MatchUp.Type'
import { User } from './User.Type'

export interface SignUp {
=======
export interface MatchUpUser {
>>>>>>> main:utils/types/MatchUpUser.Type.ts
    id?: string;
    userId: string;
    matchUpId: string;
    user?: User;
    matchUp?: MatchUp;
    attended: boolean;
  }