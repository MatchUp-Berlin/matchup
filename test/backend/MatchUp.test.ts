import { createNewMatchUp } from '../../utils/Mutation/createMatchUp.util';
import { getMatchUpById } from '../../utils/Query/getMatchUpById.util';
import { getUserById } from '../../utils/Query/getUserById.util';
import { getUserByIdMock } from '../mocks/getUserById.mock';
import {
  createMatchUpMock,
  getMatchUpByIdMock,
} from '../mocks/createNewMatchUp.mock';

import Amplify from 'aws-amplify';
import awsconfig from '../../src/aws-exports';

Amplify.configure(awsconfig);

test('create and get MatchUp', async () => {
  const data = await createNewMatchUp(createMatchUpMock);
  expect(data).toStrictEqual(getMatchUpByIdMock);
  const matchUpData = await getMatchUpById(data.id);
  expect(matchUpData).toStrictEqual(getMatchUpByIdMock);
});

// test('get User by ID Appsync', async () => {
//   const data = await getUserById('ceb7d85e-021e-4657-90a0-e3e2f98bcc7c');
//   expect(data).toBe(getUserByIdMock);
// });
