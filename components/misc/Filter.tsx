import React, { Dispatch, LegacyRef, SetStateAction, useRef, useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Filter.module.scss';

export interface IFilterProps {
  setTimeFrame: Dispatch<SetStateAction<{ from: string; to: string }>>;
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const { colors, darkMode, shadows } = useTheme();

  function getNextDayOfTheWeek(dayName: string, excludeToday = true, refDate = new Date()) {
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(dayName);
    refDate.setHours(0, 0, 0, 0);
    refDate.setDate(
      refDate.getDate() + +!!excludeToday + ((dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7)
    );
    return refDate;
  }

  function handleTimeFrameChange(e: any) {
    switch (e.target.value) {
      case '0': {
        const start = new Date();
        start.setUTCHours(0, 0, 0, 0);

        const end = new Date();
        end.setHours(23, 59, 59, 999);

        props.setTimeFrame({
          from: start.toISOString(),
          to: end.toISOString(),
        });
        break;
      }
      case '1': {
        const start = getNextDayOfTheWeek('fri');
        const end = getNextDayOfTheWeek('sun');
        end.setHours(23, 59, 59, 999);

        props.setTimeFrame({
          from: start.toISOString(),
          to: end.toISOString(),
        });
        break;
      }
      case '2': {
        // ACHTUNG BUG!!!
        const start = getNextDayOfTheWeek('mon');
        const end = getNextDayOfTheWeek('sun', false, start);
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
      <input
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD', color: '#757575' }}
        value={props.city}
        onChange={(e) => props.setCity(e.target.value)}
        placeholder="Search for a city"
        className={styles.input + ' ' + styles.location}
      ></input>
      <select
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD', color: '#757575' }}
        placeholder="Select time"
        className={styles.input + ' ' + styles.date}
        onChange={handleTimeFrameChange}
      >
        <option value="0">Today</option>
        <option value="1">This Weekend</option>
        <option value="2">Next Week</option>
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
