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
  variant: 'small' | 'large';
  id?: string;
  title: string;
  location: string;
  coordinates: number[];
  signups: SignUpsReturn;
  organizerId: string;
  organizer?: User;
  sportCategory: TSportCategories;
  skillLevel: TSkillLevels;
  totalCost: number;
  reservedCourt: boolean;
  attendanceMin: number;
  attendanceMax: number;
  cancelled: boolean;
  description: string;
  image: string;
  date: string;
  currency: string;
  updates: Update[];
  watchList: WatchList[];
  indoor: boolean;
  // id: string;
  // variant: 'small' | 'large';
  // timestamp: string;
  // title: string;
  // slots?: number;
  // participating: number;
  // location: string;
  // sport: TSportCategories;
  // skill?: TSkillLevels;
  // imageUrl?: string;
  // paid?: boolean;
  // price: number;
  // rented?: boolean;
}

const MatchUpCard: React.FunctionComponent<IMatchUpCardProps> = (props) => {
  const { colors, shadows } = useTheme();
  return (
    <Link href={`/MatchUps/${props.id}`}>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: colors.background[80],
          boxShadow: shadows.medium,
          height: props.variant == 'large' ? '150px' : '100px',
        }}
      >
        <div className={styles.imageWrapper}>
          <ImageFallback
            src={props.imageUrl as string}
            fallbackSrc={getDefaultImage(props.sport).src}
            alt={props.title}
            layout='fill'
            objectFit='cover'
          ></ImageFallback>
        </div>

        <div className={styles.infoWrapper}>
          <div
            className={styles.info}
            style={
              props.variant == 'small'
                ? { justifyContent: 'space-around', height: '100%' }
                : {}
            }
          >
            <div className={styles.title} style={{ color: colors.text[100] }}>
              <Image
                width={'20px'}
                height={'20px'}
                src={getSportIcon(props.sportCategory)}
                alt={props.sportCategory}
              ></Image>
              <p className='highlight-2'>{props.title}</p>
            </div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <Image
                  width={'10px'}
                  height={'10px'}
                  src={clock}
                  alt='taking place on'
                ></Image>
                <p style={{ color: colors.text[60] }}>
                  {moment(props.date).format('H:m dddd')}
                </p>
              </div>
              <div className={styles.detail}>
                <Image
                  width={'10px'}
                  height={'10px'}
                  src={pin}
                  alt='taking place at'
                ></Image>
                <p style={{ color: colors.text[60] }}>{props.location}</p>
              </div>

              {props.variant == 'large' && (
                <div className={styles.detail}>
                  <Image
                    width={'10px'}
                    height={'10px'}
                    src={euro}
                    alt='costs'
                  ></Image>
                  <p style={{ color: colors.text[60] }}>
                    {props.totalCost > 0 ? props.totalCost + '.00' : 'Free'}
                  </p>
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
                <p style={{ color: colors.text[100] }}>{props.skillLevel}</p>
              </div>
              {props.reservedCourt && (
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
              {props.variant == 'large' &&
                props.attendanceMin &&
                props.attendanceMin - props.signups.items.length && (
                  <div
                    className={styles.pill}
                    style={{
                      backgroundColor: colors.background[100],
                      boxShadow: shadows.small,
                    }}
                  >
                    <p style={{ color: colors.primary[100] }}>
                      {props.attendanceMin - props.signups.items.length} Spots
                      left
                    </p>
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
