import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/MatchUp.Card.module.scss';
import moment from 'moment';

import clock from '../../public/clock.svg';
import pin from '../../public/pin.svg';
import euro from '../../public/euro.svg';
import { TSkillLevels, TSportCategories } from '../../utils/types/MatchUp.Type';
import getSportIcon from '../../utils/getSportIcon';
import getDefaultImage from '../../utils/getDefaultImage';
import Link from 'next/link';
import ImageFallback from '../misc/ImageFallback';

//TODO: Adjust to actual types!!

export interface IMatchUpCardProps {
  id: string;
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
  price: number;
  rented?: boolean;
}

const MatchUpCard: React.FunctionComponent<IMatchUpCardProps> = (props) => {
  const { colors, shadows } = useTheme();
  const isFinished = new Date(props.timestamp) < new Date();
  return (
    <Link href={`/MatchUps/${props.id}`}>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: colors.background[80],
          boxShadow: shadows.small,
          height: props.variant == 'large' ? '150px' : '100px',
          opacity: isFinished ? 0.5 : 1,
        }}
      >
        <div className={styles.imageWrapper}>
          <ImageFallback
            src={props.imageUrl as string}
            fallbackSrc={getDefaultImage(props.sport).src}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          ></ImageFallback>
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
                <Image width={'10px'} height={'10px'} src={clock} alt="taking place on"></Image>
                <p style={{ color: colors.text[60] }}>
                  {moment(props.timestamp).format('dddd MMM Do  hh:mma ')}
                </p>
              </div>
              <div className={styles.detail}>
                <Image width={'10px'} height={'10px'} src={pin} alt="taking place at"></Image>
                <p style={{ color: colors.text[60] }}>{props.location}</p>
              </div>

              {props.variant == 'large' && (
                <div className={styles.detail}>
                  <Image width={'10px'} height={'10px'} src={euro} alt="costs"></Image>
                  <p style={{ color: colors.text[60] }}>{props.price > 0 ? props.price + '.00' : 'Free'}</p>
                </div>
              )}
            </div>
          </div>

          {props.variant == 'large' && (
            <div className={styles.pills}>
              <div
                className={styles.pill}
                style={{
                  backgroundColor: colors.background[100],
                  boxShadow: shadows.small,
                }}
              >
                <p style={{ color: colors.text[100] }}>{props.skill}</p>
              </div>
              {props.rented && (
                <div
                  className={styles.pill}
                  style={{
                    backgroundColor: colors.background[100],
                    boxShadow: shadows.small,
                  }}
                >
                  <p style={{ color: colors.text[100] }}>Rented</p>
                </div>
              )}
              {props.variant == 'large' && props.slots && props.slots - props.participating && (
                <div
                  className={styles.pill}
                  style={{
                    backgroundColor: colors.background[100],
                    boxShadow: shadows.small,
                  }}
                >
                  <p style={{ color: colors.primary[100] }}>{props.slots - props.participating} Spots left</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MatchUpCard;
