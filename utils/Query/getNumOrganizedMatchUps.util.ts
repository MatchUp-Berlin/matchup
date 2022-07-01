import { getOrganizerMatchUps } from './getOrganizerMatchUps.util';

export async function getNumOrganizerMatchups(id: string): Promise<Number> {
  const matchUps = await getOrganizerMatchUps(id);
  return matchUps.items.length;
}
