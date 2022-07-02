import { getUserMatchUpsAttended } from './getUserMatchUpsAttended.util';

export async function getNumAttendedMatchUps(userId: string): Promise<Number> {
  try {
    const matchUps = await getUserMatchUpsAttended(userId);
    return matchUps.length;
  } catch (err) {
    throw err;
  }
}
