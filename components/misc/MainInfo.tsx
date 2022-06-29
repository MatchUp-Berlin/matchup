import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import getSportIcon from '../../utils/getSportIcon';
import styles from './styles/MainInfo.module.scss';
import clock from '../../public/clock.svg';
import pin from '../../public/pin.svg';
import euro from '../../public/euro.svg';
import { TCity, TSportCategories } from '../../utils/types/MatchUp.Type';

export interface IMainInfoProps {
  title: string;
  sport: TSportCategories;
  timestamp: string;
  city: TCity;
  costs: number;
}

const MainInfo: React.FunctionComponent<IMainInfoProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: colors.text[100] }}>
        Arabs vs. Italians Basketball
        <span>
          <Image width={'30px'} height={'30px'} src={getSportIcon('basketball')} alt={'basketball'}></Image>
        </span>
      </h1>
      {/* DETAILS */}
      <div className={styles.details}>
        <div className={styles.detail}>
          <Image width={'18em'} height="18em" src={clock} alt="taking place on"></Image>
          <p style={{ color: colors.text[60] }}>{moment('2022-06-27T15:33:52.444Z').format('H:m dddd')}</p>
        </div>
        <div className={styles.detail}>
          <Image width={'18em'} height="18em" src={pin} alt="taking place at"></Image>
          <p style={{ color: colors.text[60] }}>{'berlin'}</p>
        </div>

        <div className={styles.detail}>
          <Image width={'18em'} height="18em" src={euro} alt="costs"></Image>
          <p style={{ color: colors.text[60] }}>{10 > 0 ? 10 + '.00' : 'Free'}</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
