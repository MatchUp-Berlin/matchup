import basketball from '../public/basketball.jpg';
import football from '../public/football.jpg';
import volleyball from '../public/volleyball.jpg';
import frisbee from '../public/frisbee.jpg';
import beachvolleyball from '../public/beachvolleyball.jpg';
import tennis from '../public/tennis.jpg';

import basketballBlurred from '../public/blurred/basketball.png';
import footballBlurred from '../public/blurred/football.png';
import volleyballBlurred from '../public/blurred/volleyball.png';
import frisbeeBlurred from '../public/blurred/frisbee.png';
import beachvolleyballBlurred from '../public/blurred/beachvolleyball.png';
import tennisBlurred from '../public/blurred/tennis.png';

import { TSportCategories } from './types/MatchUp.Type';

export default function getDefaultImage(sport: TSportCategories, blur: boolean = false) {
  switch (sport) {
    case 'football': {
      if (blur) return footballBlurred;
      return football;
    }
    case 'basketball': {
      if (blur) return basketballBlurred;
      return basketball;
    }
    case 'beach-volleyball': {
      if (blur) return beachvolleyballBlurred;
      return beachvolleyball;
    }
    case 'tennis': {
      if (blur) return tennisBlurred;
      return tennis;
    }
    case 'volleyball': {
      if (blur) return volleyballBlurred;
      return volleyball;
    }
    case 'ultimate-frisbee': {
      if (blur) return frisbeeBlurred;
      return frisbee;
    }
  }
}
