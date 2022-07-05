import { SignUp, SignUpsReturn } from './SignUp.Type';
import { Update } from './Update.Type';
import { WatchList } from './WatchList.Type';
import { User } from './User.Type';
import { TAddress } from './Address.Type';

export type TSportCategories =
  | 'basketball'
  | 'football'
  | 'tennis'
  | 'ultimate-frisbee'
  | 'beach-volleyball'
  | 'volleyball';

export type TSkillLevels = 'beginner' | 'intermediate' | 'advanced';

export type TCity =
  | 'berlin'
  | 'hamburg'
  | 'münchen'
  | 'köln'
  | 'frankfurtamMain'
  | 'stuttgart'
  | 'dortmund'
  | 'düsseldorf'
  | 'bremen'
  | 'hannover';

export interface MatchUp {
  id: string;
  title: string;
  location: string;
  address: TAddress;
  signups: SignUpsReturn;
  organizerId: string;
  organizer?: User;
  sportCategory: TSportCategories;
  skillLevel: TSkillLevels;
  totalCost: number;
  reservedCourt: boolean;
  attendanceMin: number;
  attendanceMax: number;
  cancelled: boolean;
  completed: boolean;
  description: string;
  image: string;
  date: string;
  currency: string;
  updates: Update[];
  watchList: WatchList[];
  indoor: boolean;
}

export interface CreateMatchUpInput {
  title: string;
  location: TCity;
  sportCategory: TSportCategories;
  organizerId: string;
  date: string;
  address?: Object;
  completed?: boolean;
  skillLevel?: TSkillLevels;
  totalCost?: number;
  reservedCourt?: boolean;
  attendanceMin?: number;
  attendanceMax?: number;
  description?: string;
  image?: File;
  indoor?: boolean;
}

export interface getMatchUpsReturn {
  items: MatchUp[];
  nextToken: string | null;
  startedAt: string | null;
}

export interface getMatchUpsByFilterFilter {
  and: [
    { location: { eq: string } },
    { or: { sportCategory: { eq: string } }[] }?,
    { and: { date: { gt: string } | { lt: string } }[] }?
  ];
}
