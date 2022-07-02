import React from 'react';
import Image from 'next/image';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/RateMatchUp.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';
import { Avatar } from '../misc';
import RatingBall from '../misc/RatingBall';

export interface IRateMatchUpModalProps {
  matchUp: MatchUp;
}

const RateMatchUpModal: React.FunctionComponent<IRateMatchUpModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();
  return (
    <div className={styles.modalWrapper}>
      <div
        style={{
          backgroundColor: colors.background[100],
          boxShadow: shadows.medium,
        }}
        className={styles.modalContainer}
      >
        <h3 style={{ color: colors.text[100] }}>Rate this MatchUp</h3>
        {/* <Avatar size={'large'} image={props.matchUp.image} /> */}
        <Image
          src={props.matchUp.image}
          alt='image not found'
          width={180}
          height={180}
          layout='intrinsic'
          style={{ borderRadius: '50%' }}
        />
        <h2 style={{ color: colors.text[100] }}>{props.matchUp.title}</h2>
        <div className={styles.ratingBallsWrapper}>
          <RatingBall ballCategory={props.matchUp.sportCategory} />
          <RatingBall ballCategory={props.matchUp.sportCategory} />
          <RatingBall ballCategory={props.matchUp.sportCategory} />
          <RatingBall ballCategory={props.matchUp.sportCategory} />
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
      </div>
    </div>
  );
};

export default RateMatchUpModal;
