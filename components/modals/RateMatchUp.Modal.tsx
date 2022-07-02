import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/RateMatchUp.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';
import { Avatar } from '../misc';
import RatingBall from '../misc/RatingBall';
import { Button } from '../misc';
import SmallButton from '../misc/SmallButton';

export interface IRateMatchUpModalProps {
  matchUp: MatchUp;
  close: () => void;
}

const RateMatchUpModal: React.FunctionComponent<IRateMatchUpModalProps> = (props) => {
  const { colors, shadows, darkMode } = useTheme();
  const [clicked, setClicked] = useState<boolean[]>([false, false, false, false, false]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setAnimating(true);
    })();
  }, []);

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
    <div
      style={{
        backgroundColor: colors.background[100],
        boxShadow: shadows.medium,
        borderColor: colors.background[80],
        bottom: animating ? 0 : '-100%',
      }}
      className={styles.modalContainer}
    >
      <div className={styles.closeButton}>
        <SmallButton
          callback={props.close}
          viewBox="0 0 10 10"
          icon={
            <path d="M5.96136 4.99995L8.89318 2.07495C9.02157 1.94656 9.0937 1.77243 9.0937 1.59086C9.0937 1.40929 9.02157 1.23516 8.89318 1.10677C8.76479 0.978378 8.59066 0.90625 8.40909 0.90625C8.22752 0.90625 8.05339 0.978378 7.925 1.10677L5 4.03859L2.075 1.10677C1.94661 0.978378 1.77248 0.90625 1.59091 0.90625C1.40934 0.90625 1.23521 0.978378 1.10682 1.10677C0.978428 1.23516 0.9063 1.40929 0.9063 1.59086C0.9063 1.77243 0.978428 1.94656 1.10682 2.07495L4.03864 4.99995L1.10682 7.92495C1.04291 7.98833 0.992188 8.06374 0.957573 8.14683C0.922958 8.22991 0.905136 8.31903 0.905136 8.40904C0.905136 8.49905 0.922958 8.58817 0.957573 8.67125C0.992188 8.75434 1.04291 8.82975 1.10682 8.89313C1.1702 8.95704 1.24561 9.00776 1.3287 9.04238C1.41178 9.07699 1.5009 9.09481 1.59091 9.09481C1.68092 9.09481 1.77003 9.07699 1.85312 9.04238C1.93621 9.00776 2.01161 8.95704 2.075 8.89313L5 5.96131L7.925 8.89313C7.98838 8.95704 8.06379 9.00776 8.14688 9.04238C8.22996 9.07699 8.31908 9.09481 8.40909 9.09481C8.4991 9.09481 8.58822 9.07699 8.6713 9.04238C8.75439 9.00776 8.8298 8.95704 8.89318 8.89313C8.95709 8.82975 9.00781 8.75434 9.04243 8.67125C9.07704 8.58817 9.09486 8.49905 9.09486 8.40904C9.09486 8.31903 9.07704 8.22991 9.04243 8.14683C9.00781 8.06374 8.95709 7.98833 8.89318 7.92495L5.96136 4.99995Z" />
          }
        />
      </div>
      <p style={{ color: colors.text[60] }}>Rate {props.matchUp.title} MatchUp</p>
      <div className={styles.imageWrapper} style={{ boxShadow: shadows.medium }}>
        <Image
          src={props.matchUp.image}
          alt={props.matchUp.title}
          layout="responsive"
          width={'180px'}
          height={'180px'}
          objectFit="cover"
        />
      </div>
      <div className={styles.ratingBallsWrapper}>
        <div
          onClick={(e) => handleBallsClick(e, 0)}
          className={clicked[0] ? styles.singleBallClicked : styles.singleBall}
        >
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
        <div
          onClick={(e) => handleBallsClick(e, 1)}
          className={clicked[1] ? styles.singleBallClicked : styles.singleBall}
        >
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
        <div
          onClick={(e) => handleBallsClick(e, 2)}
          className={clicked[2] ? styles.singleBallClicked : styles.singleBall}
        >
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
        <div
          onClick={(e) => handleBallsClick(e, 3)}
          className={clicked[3] ? styles.singleBallClicked : styles.singleBall}
        >
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
        <div
          onClick={(e) => handleBallsClick(e, 4)}
          className={clicked[4] ? styles.singleBallClicked : styles.singleBall}
        >
          <RatingBall ballCategory={props.matchUp.sportCategory} />
        </div>
      </div>

      <input
        type="text"
        placeholder="Give the organizer some feeback"
        style={{
          boxShadow: shadows.medium,
          color: colors.text[80],
          borderColor: darkMode ? colors.background[60] : '#DDDDDD',
        }}
      ></input>
      <Button
        text={'Send'}
        callback={() => console.log('review sent')}
        // disabled={false}
        variant={'primary'}
      />
    </div>
  );
};

export default RateMatchUpModal;

/* 

USAGE:


const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
      {open && <RateMatchUp matchUp={matchUps[2]} close={() => setOpen(false)} />}
    </>
  );

*/
