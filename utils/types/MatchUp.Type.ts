import { User } from './User.Type';

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
}
