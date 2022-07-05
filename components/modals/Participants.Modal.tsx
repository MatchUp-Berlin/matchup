import React, { useEffect, useState } from 'react';
import { User } from '../../utils/types/User.Type';
import { useTheme } from '../../contexts/Theme';
import { ParticipantCard } from '../cards';
import styles from './styles/Participants.Modal.module.scss';
import SmallButton from '../misc/SmallButton';

export interface IParticipantsModalProps {
  close: () => void;
  participants: User[];
  hasFinished: boolean;
  isOrganizer: boolean;
}

const ParticipantsModal: React.FunctionComponent<IParticipantsModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setAnimating(true);
    })();
  }, []);

  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: colors.background[100],
          boxShadow: shadows.large,
          bottom: animating ? 0 : '-100%',
          borderColor: colors.background[60],
        }}
      >
        <SmallButton
          callback={props.close}
          viewBox='0 0 10 10'
          icon={
            <path d='M5.96136 4.99995L8.89318 2.07495C9.02157 1.94656 9.0937 1.77243 9.0937 1.59086C9.0937 1.40929 9.02157 1.23516 8.89318 1.10677C8.76479 0.978378 8.59066 0.90625 8.40909 0.90625C8.22752 0.90625 8.05339 0.978378 7.925 1.10677L5 4.03859L2.075 1.10677C1.94661 0.978378 1.77248 0.90625 1.59091 0.90625C1.40934 0.90625 1.23521 0.978378 1.10682 1.10677C0.978428 1.23516 0.9063 1.40929 0.9063 1.59086C0.9063 1.77243 0.978428 1.94656 1.10682 2.07495L4.03864 4.99995L1.10682 7.92495C1.04291 7.98833 0.992188 8.06374 0.957573 8.14683C0.922958 8.22991 0.905136 8.31903 0.905136 8.40904C0.905136 8.49905 0.922958 8.58817 0.957573 8.67125C0.992188 8.75434 1.04291 8.82975 1.10682 8.89313C1.1702 8.95704 1.24561 9.00776 1.3287 9.04238C1.41178 9.07699 1.5009 9.09481 1.59091 9.09481C1.68092 9.09481 1.77003 9.07699 1.85312 9.04238C1.93621 9.00776 2.01161 8.95704 2.075 8.89313L5 5.96131L7.925 8.89313C7.98838 8.95704 8.06379 9.00776 8.14688 9.04238C8.22996 9.07699 8.31908 9.09481 8.40909 9.09481C8.4991 9.09481 8.58822 9.07699 8.6713 9.04238C8.75439 9.00776 8.8298 8.95704 8.89318 8.89313C8.95709 8.82975 9.00781 8.75434 9.04243 8.67125C9.07704 8.58817 9.09486 8.49905 9.09486 8.40904C9.09486 8.31903 9.07704 8.22991 9.04243 8.14683C9.00781 8.06374 8.95709 7.98833 8.89318 7.92495L5.96136 4.99995Z' />
          }
        />

        <div className={styles.scrollable}>
          {props.participants &&
            props.participants.map((user, index) => {
              return <ParticipantCard key={index} user={user} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ParticipantsModal;

/* 

USAGE:

const [display, setDisplay] = useState(true);
return (
  <>
    <button
      onClick={() => {
        setDisplay(true);
      }}
    >
      Open
    </button>
    {display && (
      <ParticipantsModal participants={participants} close={() => setDisplay(false)}></ParticipantsModal>
    )}
  </>
);

*/
