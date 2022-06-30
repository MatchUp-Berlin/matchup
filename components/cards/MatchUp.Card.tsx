import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/MatchUp.Card.module.scss';
import moment from 'moment';

import basketball from '../../public/basketball-icon.png';
import football from '../../public/football-icon.png';
import volleyball from '../../public/volleyball-icon.png';
import frisbee from '../../public/frisbee-icon.png';
import beachvolleyball from '../../public/beachvolleyball-icon.png';
import tennis from '../../public/tennis-icon.png';
import clock from '../../public/clock.svg';
import pin from '../../public/pin.svg';
import euro from '../../public/euro.svg';
import { TSkillLevels, TSportCategories } from '../../utils/types/MatchUp.Type';

//TODO: Adjust to actual types!!

export interface IMatchUpCardProps {
  variant: 'small' | 'large';
  timestamp: string;
  title: string;
  slots?: number;
  participating: number;
  location: string;
  sport: TSportCategories;
  skill?: TSkillLevels;
  imageUrl?: string;
  paid?: boolean;
  price?: number;
  rented?: boolean;
}

const MatchUpCard: React.FunctionComponent<IMatchUpCardProps> = (props) => {
  const { colors, shadows } = useTheme();

  function getSportIcon(
    sport: 'basketball' | 'football' | 'tennis' | 'ultimate-frisbee' | 'beach-volleyball' | 'volleyball'
  ) {
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

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: colors.background[80],
        boxShadow: shadows.medium,
        height: props.variant == 'large' ? '150px' : '100px',
      }}
    >
      <div className={styles.imageWrapper}>
        <Image src={props.imageUrl || } alt={props.title} layout="fill" objectFit="cover"></Image>
      </div>

      <div className={styles.infoWrapper}>
        <div
          className={styles.info}
          style={props.variant == 'small' ? { justifyContent: 'space-around', height: '100%' } : {}}
        >
          <div className={styles.title} style={{ color: colors.text[100] }}>
            <Image width={'20px'} height={'20px'} src={getSportIcon(props.sport)} alt={props.sport}></Image>
            <p className="highlight-2">{props.title}</p>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <Image src={clock} alt="taking place on"></Image>
              <p style={{ color: colors.text[60] }}>{moment(props.timestamp).format('H:m dddd')}</p>
            </div>
            <div className={styles.detail}>
              <Image src={pin} alt="taking place at"></Image>
              <p style={{ color: colors.text[60] }}>{props.location}</p>
            </div>

            {props.variant == 'large' && (
              <div className={styles.detail}>
                <Image src={euro} alt="costs"></Image>
                <p style={{ color: colors.text[60] }}>{props.price > 0 ? props.price + '.00' : 'Free'}</p>
              </div>
            )}
          </div>
        </div>

        {props.variant == 'large' && (
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
                <p style={{ color: colors.text[100] }}>Rented</p>
              </div>
            )}
            {props.variant == 'large' && props.slots && props.slots - props.participating && (
              <div
                className={styles.pill}
                style={{ backgroundColor: colors.background[100], boxShadow: shadows.small }}
              >
                <p style={{ color: colors.primary[100] }}>{props.slots - props.participating} Spots left</p>
              </div>
            )}
          </div>
        )}
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
