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
import { watchListOnCard } from '../icons';
import { createNewWatchList } from '../../utils/Mutation/createWatchList.util';
import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from '../../contexts/Auth';


export interface IMatchUpCardProps {
  id: string;
  variant: 'small' | 'medium' | 'large';
  title: string;
  location: string;
  sportCategory: TSportCategories;
  skillLevel: TSkillLevels;
  totalCost: number;
  reservedCourt: boolean;
  attendanceMax: number;
  image: string;
  date: string;
  indoor: boolean;
  participating: number;
}

const MatchUpCard: React.FunctionComponent<IMatchUpCardProps> = (props) => {
  const { colors, shadows } = useTheme();
  const { currentUserId, currentUser } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation(['watchlist', currentUserId], createNewWatchList, {
    onSuccess: () => {
      queryClient.invalidateQueries(['user', currentUserId]);
    },
  });

  const isFinished = new Date(props.date) < new Date();
  const isInWatchlist = currentUser?.watchList.items.some((match) => match.matchUpId === props.id);
<<<<<<< HEAD
  const remainingSlots = props.slots - props.participating;
=======
  const remainingSlots = props.attendanceMax - props.participating;
>>>>>>> main

  if (props.variant === 'large')
    return (
      <Link href={`/MatchUps/${props.id}`}>
        <div
          className={styles.largeWrapper}
          style={{
            backgroundColor: colors.background[80],
            boxShadow: shadows.small,
            opacity: isFinished ? 0.5 : 1,
          }}
        >
          <div
            className={styles.watchList}
            onClick={() =>
              mutation.mutate({
                userId: currentUserId as string,
                matchUpId: props.id as string,
              })
            }
          >
            <svg
              style={{ opacity: isInWatchlist ? 1 : 0.5 }}
              width="14px"
              height="21px"
              viewBox={watchListOnCard.viewBox}
            >
              {isInWatchlist ? watchListOnCard.path.active : watchListOnCard.path.inActive}
            </svg>
          </div>
          <div className={styles.imageWrapper}>
            <ImageFallback
              src={props.image as string}
              fallbackSrc={getDefaultImage(props.sportCategory).src}
              alt={props.title}
              layout="fill"
              objectFit="cover"
            ></ImageFallback>
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <div className={styles.title} style={{ color: colors.text[100] }}>
                <Image
                  width={'20px'}
                  height={'20px'}
                  src={getSportIcon(props.sportCategory)}
                  alt={props.sportCategory}
                ></Image>
                <p className="highlight-2">{props.title}</p>
              </div>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <Image width={'10px'} height={'10px'} src={clock} alt="taking place on"></Image>
                  <p style={{ color: colors.text[60] }}>
                    {moment(props.date).format('dddd MMM Do  hh:mma ')}
                  </p>
                </div>
                <div className={styles.detail}>
                  <Image width={'10px'} height={'10px'} src={pin} alt="taking place at"></Image>
                  <p style={{ color: colors.text[60] }}>{props.location}</p>
                </div>

                <div className={styles.detail}>
                  <Image width={'10px'} height={'10px'} src={euro} alt="costs"></Image>
                  <p style={{ color: colors.text[60] }}>
                    {props.totalCost > 0 ? props.totalCost + '.00' : 'Free'}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.pills}>
              <div
                className={styles.pill}
                style={{
                  backgroundColor: colors.background[100],
                  boxShadow: shadows.small,
                }}
              >
                <p
                  style={{
                    color: colors.text[100],
                    fontSize: props.variant === 'large' ? 'x-small' : 'xx-small',
                  }}
                >
                  {props.skillLevel}
                </p>
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
<<<<<<< HEAD
              {props.slots && remainingSlots && (
=======
              {remainingSlots && (
>>>>>>> main
                <div
                  className={styles.pill}
                  style={{
                    backgroundColor: colors.background[100],
                    boxShadow: shadows.small,
                  }}
                >
                  <p style={{ color: colors.primary[100] }}>
                    {remainingSlots} Spot{remainingSlots > 1 ? 's' : ''} left
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  return (
    <Link href={`/MatchUps/${props.id}`}>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: colors.background[80],
          boxShadow: shadows.small,
          height: props.variant == 'medium' ? '150px' : '100px',
          opacity: isFinished ? 0.5 : 1,
        }}
      >
        <div className={styles.imageWrapper}>
          <ImageFallback
            src={props.image as string}
            fallbackSrc={getDefaultImage(props.sportCategory).src}
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
              <Image
                width={'20px'}
                height={'20px'}
                src={getSportIcon(props.sportCategory)}
                alt={props.sportCategory}
              ></Image>
              <p className="highlight-2">{props.title}</p>
            </div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <Image width={'10px'} height={'10px'} src={clock} alt="taking place on"></Image>
                <p style={{ color: colors.text[60] }}>{moment(props.date).format('dddd MMM Do  hh:mma ')}</p>
              </div>
              <div className={styles.detail}>
                <Image width={'10px'} height={'10px'} src={pin} alt="taking place at"></Image>
                <p style={{ color: colors.text[60] }}>{props.location}</p>
              </div>

              {props.variant == 'medium' && (
                <div className={styles.detail}>
                  <Image width={'10px'} height={'10px'} src={euro} alt="costs"></Image>
                  <p style={{ color: colors.text[60] }}>
                    {props.totalCost > 0 ? props.totalCost + '.00' : 'Free'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {props.variant == 'medium' && (
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
              {props.variant == 'medium' && remainingSlots && (
                <div
                  className={styles.pill}
                  style={{
                    backgroundColor: colors.background[100],
                    boxShadow: shadows.small,
                  }}
                >
                  <p style={{ color: colors.primary[100] }}>{remainingSlots} Spots left</p>
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
