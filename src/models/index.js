// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MatchUp, SignUp, User, Update, WatchList } = initSchema(schema);

export {
  MatchUp,
  SignUp,
  User,
  Update,
  WatchList
};