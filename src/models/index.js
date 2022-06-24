// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MatchUpUser, User, MatchUp, UserMatchUp } = initSchema(schema);

export {
  MatchUpUser,
  User,
  MatchUp,
  UserMatchUp
};