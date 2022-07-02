import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { getNextDayOfTheWeek } from '../../utils/getNextDayOfTheWeek';
import { TCity } from '../../utils/types/MatchUp.Type';
import styles from './styles/Filter.module.scss';

export interface IFilterProps {
  setTimeFrame: Dispatch<SetStateAction<{ from: string; to: string }>>;
  setCity: Dispatch<SetStateAction<TCity>>;
  city: TCity;
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const { colors, darkMode, shadows } = useTheme();


  function handleTimeFrameChange(e: any) {
    switch (e.target.value) {
      case 'this-week': {
        const start = new Date();
        start.setUTCHours(0, 0, 0, 0);

        const end = getNextDayOfTheWeek('sun');
        end.setHours(23, 59, 59, 999);

        props.setTimeFrame({
          from: start.toISOString(),
          to: end.toISOString(),
        });
        break;
      }
      case 'this-weekend': {
        const start = getNextDayOfTheWeek('fri', false);
        const end = getNextDayOfTheWeek('sun');
        end.setHours(23, 59, 59, 999);

        props.setTimeFrame({
          from: start.toISOString(),
          to: end.toISOString(),
        });
        break;
      }
      case 'next-week': {
        const start = getNextDayOfTheWeek('mon');
        const end = getNextDayOfTheWeek('sun', false, new Date(start));
        end.setHours(23, 59, 59, 999);

        props.setTimeFrame({
          from: start.toISOString(),
          to: end.toISOString(),
        });
        break;
      }
    }
  }

  return (
    <div className={styles.wrapper} style={{ boxShadow: shadows.small }}>
      <select
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD', color: '#757575' }}
        value={props.city}
        onChange={(e) => props.setCity(e.target.value as TCity)}
        placeholder="Search for a city"
        className={styles.input + ' ' + styles.location}
      >
        <option value="berlin">berlin</option>
        <option value="hamburg">hamburg</option>
        <option value="münchen">münchen</option>
        <option value="köln">köln</option>
        <option value="frankfurtamMain">frankfurt am Main</option>
        <option value="stuttgart">stuttgart</option>
        <option value="dortmund">dortmund</option>
        <option value="düsseldorf">düsseldorf</option>
        <option value="bremen">bremen</option>
        <option value="hannover">hannover</option>
      </select>
      <select
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD', color: '#757575' }}
        placeholder="Select time"
        className={styles.input + ' ' + styles.date}
        onChange={handleTimeFrameChange}
      >
        <option value="this-week">This week</option>
        <option value="this-weekend">This Weekend</option>
        <option value="next-week">Next Week</option>
      </select>
    </div>
  );
};

export default Filter;

/*

USAGE:

const [categories, setCategories] = useState<Array<string>>([]);
const [timeFrame, setTimeFrame] = useState<{ from: string; to: string }>({
  from: new Date().toISOString(),
  to: new Date().toISOString(),
});
const [city, setCity] = useState<string>('Berlin');

<Filter city={city} setCity={setCity} setTimeFrame={setTimeFrame}></Filter>
<SportFilter categories={categories} setCategories={setCategories} />

*/
