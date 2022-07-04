import { User } from 'aws-sdk/clients/budgets';
import { MatchUp } from '../../src/models';

export interface Update {
  id?: string;
  userId: string;
  matchUpId: string;
  user: User;
  matchUp?: MatchUp;
  content: string;
  createdAt: string;
}

export interface UpdatesReturn {
  items: Update[];
  nextToken: string | null;
  startedAt: string | null;
}

export interface CreateUpdateInput {
  userId: string;
  matchUpId: string;
  content: string;
}
