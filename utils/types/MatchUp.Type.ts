import { User } from './User.Type';
import { Update } from './Update.Type';

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
  | 'frankfurt-am - Main'
  | 'essen'
  | 'stuttgart'
  | 'dortmund'
  | 'düsseldorf'
  | 'bremen'
  | 'hanover';

export interface MatchUp {
  id?: string;
  title: string;
  users: User[];
  location: string;
  organizer: string;
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
}

export interface getMatchUpsByFilterReturn {
  items: MatchUp[];
  nextToken: string;
  startedAt: string;
}

export interface getMatchUpsByFilterFilter {
  and: [
    { location: { eq: string } },
    { or: { sportCategory: { eq: string } }[] }?,
    { and: { date: { gt: string } | { lt: string } }[] }?
  ];
}
