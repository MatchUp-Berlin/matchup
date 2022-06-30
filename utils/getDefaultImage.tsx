import basketball from '../public/basketball.jpg';
import football from '../public/football.jpg';
import volleyball from '../public/volleyball.jpg';
import frisbee from '../public/frisbee.jpg';
import beachvolleyball from '../public/beachvolleyball.jpg';
import tennis from '../public/tennis.jpg';
import { TSportCategories } from './types/MatchUp.Type';

export default function getDefaultImage(sport: TSportCategories) {
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
