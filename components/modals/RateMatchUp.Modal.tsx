import React, { useState } from 'react';
import Image from 'next/image';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/RateMatchUp.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';
import { Avatar } from '../misc';
import RatingBall from '../misc/RatingBall';
import { Button } from '../misc';

export interface IRateMatchUpModalProps {
  matchUp: MatchUp;
}

const RateMatchUpModal: React.FunctionComponent<IRateMatchUpModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleBallsClick = (e: any, index: number) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };
  return (
    <div className={styles.modalWrapper}>
      <div
        style={{
          backgroundColor: colors.background[100],
          boxShadow: shadows.medium,
        }}
        className={styles.modalContainer}
      >
        <h4 style={{ color: colors.text[100] }}>Rate this MatchUp</h4>
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
          <div
            onClick={(e) => handleBallsClick(e, 0)}
            className={styles.singleBall}
          >
            <RatingBall ballCategory={props.matchUp.sportCategory} />
          </div>
          <div
            onClick={(e) => handleBallsClick(e, 1)}
            className={styles.singleBall}
          >
            <RatingBall ballCategory={props.matchUp.sportCategory} />
          </div>
          <div
            onClick={(e) => handleBallsClick(e, 2)}
            className={styles.singleBall}
          >
            <RatingBall ballCategory={props.matchUp.sportCategory} />
          </div>
          <div
            onClick={(e) => handleBallsClick(e, 3)}
            className={styles.singleBall}
          >
            <RatingBall ballCategory={props.matchUp.sportCategory} />
          </div>
          <div
            onClick={(e) => handleBallsClick(e, 4)}
            className={styles.singleBall}
          >
            <RatingBall ballCategory={props.matchUp.sportCategory} />
          </div>
        </div>

        <div className={styles.feedbacks}>
          <p style={{ color: colors.text[80] }}>
            Give the organizer some feedback
          </p>
          <textarea className={styles.feedbackTextarea}></textarea>
        </div>
        <Button
          text={'Send'}
          callback={() => console.log('review sent')}
          // disabled={false}
          variant={'primary'}
        />
      </div>
    </div>
  );
};

export default RateMatchUpModal;
