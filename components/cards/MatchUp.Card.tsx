import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/MatchUp.Card.module.scss';

import basketball from '../../public/basketball-icon.png';
import clock from '../../public/clock.svg';
import pin from '../../public/pin.svg';
import euro from '../../public/euro.svg';

export interface IMatchUpCardProps {
  timestamp: string;
  title: string;
  slots: number;
  participating: number;
  location: string;
  sport: 'basketball' | 'football' | 'tennis' | 'ultimate-frisbee';
  skill: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: any;
  paid: boolean;
  price?: number;
  rented?: boolean;
}

const MatchUpCard: React.FunctionComponent<IMatchUpCardProps> = (props) => {
  const { colors, shadows } = useTheme();

  function getSportIcon(sport: 'basketball' | 'football' | 'tennis' | 'ultimate-frisbee') {
    switch (sport) {
      case 'basketball': {
        return basketball;
      }
      case 'football': {
        return basketball;
      }
      case 'tennis': {
        return basketball;
      }
      case 'ultimate-frisbee': {
        return basketball;
      }
    }
  }

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: colors.background[80], boxShadow: shadows.medium }}
    >
      <div className={styles.imageWrapper}>
        <img src={props.imageUrl.src} alt={props.title} height="100%"></img>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <div className={styles.title}>
            <Image width={'25px'} height={'25px'} src={getSportIcon(props.sport)} alt={props.sport}></Image>
            <p className="highlight-2">{props.title}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <Image src={clock} alt="taking place on"></Image>
              <p style={{ color: colors.text[60] }}>{props.timestamp}</p>
            </div>
            <div className={styles.detail}>
              <Image src={pin} alt="taking place at"></Image>
              <p style={{ color: colors.text[60] }}>{props.location}</p>
            </div>
            <div className={styles.detail}>
              <Image src={euro} alt="costs"></Image>
              <p style={{ color: colors.text[60] }}>{props.price + '.00' || 'Free'}</p>
            </div>
          </div>
        </div>
        <div className={styles.pills}>
          <div
            className={styles.pill}
            style={{ backgroundColor: colors.background[100], boxShadow: shadows.small }}
          >
            <p style={{ color: colors.text[100] }}>{props.skill}</p>
          </div>
          {props.rented && (
            <div
              className={styles.pill}
              style={{ backgroundColor: colors.background[100], boxShadow: shadows.small }}
            >
              <p style={{ color: colors.text[100] }}>Rented court</p>
            </div>
          )}
          {props.slots - props.participating && (
            <div
              className={styles.pill}
              style={{ backgroundColor: colors.background[100], boxShadow: shadows.small }}
            >
              <p style={{ color: colors.primary[100] }}>{props.slots - props.participating} Spots left</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchUpCard;

/* 

USAGE:

<MatchUpCard
  timestamp={'August 24th'}
  title={'Arabas vs. Italianas with shorts'}
  slots={10}
  participating={2}
  location={'Treptower Park, Berlin'}
  sport={'basketball'}
  skill={'beginner'}
  imageUrl={footballPic}
  paid={true}
  price={10}
  rented={true}
></MatchUpCard>

*/
