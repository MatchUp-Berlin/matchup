import { API } from 'aws-amplify';
import { listMatchUps } from '../../src/graphql/queries';
import {
  getMatchUpsReturn,
  getMatchUpsByFilterFilter,
} from '../types/MatchUp.Type';

export async function getMatchUpsByFilter(
  location: string,
  sportCategory?: string[] | null,
  startDate?: string | undefined,
  endDate?: string | undefined,
  completed?: boolean | undefined
): Promise<getMatchUpsReturn> {
  try {
    const filter: getMatchUpsByFilterFilter = {
      and: [{ location: { eq: location } }],
    };

    sportCategory &&
      sportCategory.length > 0 &&
      filter.and.push({
        or: sportCategory?.map((cat) => {
          return { sportCategory: { eq: cat } };
        }),
      });

    startDate && filter.and.push({ and: [{ date: { gt: startDate } }] });

    endDate && filter?.and[2]?.and.push({ date: { lt: endDate } });

    if (completed === true)
      filter?.and[2]?.and.push({ date: { gt: new Date().toISOString() } });

    if (completed === false)
      filter?.and[2]?.and.push({ date: { lt: new Date().toISOString() } });

    const matchUpData = await API.graphql({
      query: listMatchUps,
      variables: { filter: filter },
    });

    const retrievedMatchUpData = await matchUpData.data.listMatchUps;

    return retrievedMatchUpData;
  } catch (err) {
    throw err;
  }
}
