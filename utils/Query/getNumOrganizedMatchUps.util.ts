import { getOrganizerMatchUps } from './getOrganizerMatchUps.util';

export async function getNumOrganizerMatchups(id: string): Promise<Number> {
  try {
    const matchUps = await getOrganizerMatchUps(id);
    return matchUps.items.length;
  } catch (err) {
    throw err;
  }
}
