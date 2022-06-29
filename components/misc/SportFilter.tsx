import React, { Dispatch, SetStateAction } from 'react';
import SportFilterButton from './SportFilterButton';
import styles from './styles/SportFilter.module.scss';

import football from '../../public/football-icon.png';
import basketball from '../../public/basketball-icon.png';
import tennis from '../../public/tennis-icon.png';
import volleyball from '../../public/volleyball-icon.png';
import beachvolleyball from '../../public/beachvolleyball-icon.png';
import frisbee from '../../public/frisbee-icon.png';

export interface ISportFilterProps {
  setCategories: Dispatch<
    SetStateAction<
      ('basketball' | 'football' | 'tennis' | 'ultimate-frisbee' | 'beach-volleyball' | 'volleyball')[]
    >
  >; // adding and removing sports
  categories: Array<string>;
}

const SportFilter: React.FunctionComponent<ISportFilterProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SportFilterButton
          setCategories={props.setCategories}
          category="football"
          icon={football}
          active={props.categories.includes('football')}
        ></SportFilterButton>

        <SportFilterButton
          setCategories={props.setCategories}
          category="basketball"
          icon={basketball}
          active={props.categories.includes('basketball')}
        ></SportFilterButton>

        <SportFilterButton
          setCategories={props.setCategories}
          category="tennis"
          icon={tennis}
          active={props.categories.includes('tennis')}
        ></SportFilterButton>

        <SportFilterButton
          setCategories={props.setCategories}
          category="volleyball"
          icon={volleyball}
          active={props.categories.includes('volleyball')}
        ></SportFilterButton>

        <SportFilterButton
          setCategories={props.setCategories}
          category="beach-volleyball"
          icon={beachvolleyball}
          active={props.categories.includes('beach-volleyball')}
        ></SportFilterButton>

        <SportFilterButton
          setCategories={props.setCategories}
          category="ultimate-frisbee"
          icon={frisbee}
          active={props.categories.includes('ultimate-frisbee')}
        ></SportFilterButton>
      </div>
    </div>
  );
};

export default SportFilter;

/* 

USAGE:
  const [categories, setCategories] = useState<Array<string>>([]);
  return (
    <>
      <SportFilter categories={categories} setCategories={setCategories} />
    </>
  );

*/
