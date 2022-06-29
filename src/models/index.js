// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MatchUpUser, User, Update, MatchUp } = initSchema(schema);

export {
  MatchUpUser,
  User,
  Update,
  MatchUp
};