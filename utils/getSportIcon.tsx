import basketball from '../public/basketball-icon.png';
import football from '../public/football-icon.png';
import volleyball from '../public/volleyball-icon.png';
import frisbee from '../public/frisbee-icon.png';
import beachvolleyball from '../public/beachvolleyball-icon.png';
import tennis from '../public/tennis-icon.png';
import { TSportCategories } from './types/MatchUp.Type';

export default function getSportIcon(sport: TSportCategories) {
  switch (sport) {
    case 'football': {
      return football;
    }
    case 'basketball': {
      return basketball;
    }
    case 'beach-volleyball': {
      return beachvolleyball;
    }
    case 'tennis': {
      return tennis;
    }
    case 'volleyball': {
      return volleyball;
    }
    case 'ultimate-frisbee': {
      return frisbee;
    }
  }
}
