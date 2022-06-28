import { User } from './User.Type';
import { Update } from './Update.Type'

export interface MatchUp {
  id?: string;
  title: string;
  users: User[];
  location: string;
  organizer: string;
  sportCategory: string;
  skillLevel: string;
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
<<<<<<< HEAD

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
=======
>>>>>>> main
