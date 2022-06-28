import { getUserById } from '../../utils/Query/getUserById.util'
import { getUserByIdMock } from '../mocks/getUserById.mock'

test('get User by ID Appsync', async () => {
  const data = await getUserById('ceb7d85e-021e-4657-90a0-e3e2f98bcc7c');
  expect(data).toBe(getUserByIdMock);
});
