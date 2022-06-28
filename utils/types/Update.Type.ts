import { User } from "aws-sdk/clients/budgets";
import { MatchUp } from "../../src/models";

export interface Update {
    id?: string;
    userId: string;
    matchUpId: string;
    user?: User;
    matchUp?: MatchUp;
    content: string;
    };