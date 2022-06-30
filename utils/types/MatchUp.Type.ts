import { SignUp, SignUpsReturn } from './SignUp.Type';
import { Update } from './Update.Type';
import { WatchList } from './WatchList.Type';
import { User } from './User.Type';

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
  | 'munich'
  | 'cologne'
  | 'frankfurt-am-Main'
  | 'essen'
  | 'stuttgart'
  | 'dortmund'
  | 'düsseldorf'
  | 'bremen'
  | 'hanover';

export interface MatchUp {
  id?: string;
  title: string;
  location: string;
  coordinates: number[];
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
  description: string;
  image: string;
  date: string;
  currency: string;
  updates: Update[];
  watchList: WatchList[];
}

export interface CreateMatchUpInput {
  title: string;
  location: TCity;
  sportCategory: TSportCategories;
  organizerId: string;
  date: string;

  coordinates?: number[];
  skillLevel?: TSkillLevels;
  totalCost?: number;
  reservedCourt?: boolean ;
  attendanceMin?: number;
  attendanceMax?: number;
  description?: string;
  image?: string;
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
