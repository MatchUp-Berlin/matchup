import { getUserMatchUpsSignedUp } from './getUserMatchUpsSignedUp.util';

export async function getNumSignedUpMatchUps(userId: string): Promise<Number> {
  try {
    const matchUps = await getUserMatchUpsSignedUp(userId);
    return matchUps.length;
  } catch (err) {
    throw err;
  }
}
