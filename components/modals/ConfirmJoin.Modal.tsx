import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/ConfirmJoin.Modal.module.scss';
import Button from '../misc/Button';

import { addUserToMatchUp } from '../../utils/Mutation/addUserToMatchUp.util';
import { removeUserFromMatchUp } from '../../utils/Mutation/removeUserFromMatchUp.util';
import { useQueryClient } from 'react-query';
import SmallButton from '../misc/SmallButton';
import { useAuth } from '../../contexts/Auth';

export interface IConfirmJoinModalProps {
  matchUp: MatchUp;
  isSignedUp: boolean;
  isWithin24Hours: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const ConfirmJoinModal: React.FunctionComponent<IConfirmJoinModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();
  const queryClient = useQueryClient();
  const { currentUser } = useAuth();

  const handleCommit = () => {
    addUserToMatchUp({
      userId: currentUser || '',
      matchUpId: props.matchUp.id || '',
    })
      .then((res) => {
        queryClient.invalidateQueries(['matchup', props.matchUp.id]);
        props.setShowModal(false);
      })
      .catch((err: any) => console.log(err));
  };

  const handleCancel = () => {
    removeUserFromMatchUp(currentUser || '', props.matchUp.id || '')
      .then((res: any) => {
        queryClient.invalidateQueries(['matchup', props.matchUp.id]);
        props.setShowModal(false);
      })
      .catch((err: any) => console.log(err));
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
        <div className={styles.closeButton}>
          <SmallButton
            callback={() => props.setShowModal(false)}
            icon={
              <path d='M5.96136 4.99995L8.89318 2.07495C9.02157 1.94656 9.0937 1.77243 9.0937 1.59086C9.0937 1.40929 9.02157 1.23516 8.89318 1.10677C8.76479 0.978378 8.59066 0.90625 8.40909 0.90625C8.22752 0.90625 8.05339 0.978378 7.925 1.10677L5 4.03859L2.075 1.10677C1.94661 0.978378 1.77248 0.90625 1.59091 0.90625C1.40934 0.90625 1.23521 0.978378 1.10682 1.10677C0.978428 1.23516 0.9063 1.40929 0.9063 1.59086C0.9063 1.77243 0.978428 1.94656 1.10682 2.07495L4.03864 4.99995L1.10682 7.92495C1.04291 7.98833 0.992188 8.06374 0.957573 8.14683C0.922958 8.22991 0.905136 8.31903 0.905136 8.40904C0.905136 8.49905 0.922958 8.58817 0.957573 8.67125C0.992188 8.75434 1.04291 8.82975 1.10682 8.89313C1.1702 8.95704 1.24561 9.00776 1.3287 9.04238C1.41178 9.07699 1.5009 9.09481 1.59091 9.09481C1.68092 9.09481 1.77003 9.07699 1.85312 9.04238C1.93621 9.00776 2.01161 8.95704 2.075 8.89313L5 5.96131L7.925 8.89313C7.98838 8.95704 8.06379 9.00776 8.14688 9.04238C8.22996 9.07699 8.31908 9.09481 8.40909 9.09481C8.4991 9.09481 8.58822 9.07699 8.6713 9.04238C8.75439 9.00776 8.8298 8.95704 8.89318 8.89313C8.95709 8.82975 9.00781 8.75434 9.04243 8.67125C9.07704 8.58817 9.09486 8.49905 9.09486 8.40904C9.09486 8.31903 9.07704 8.22991 9.04243 8.14683C9.00781 8.06374 8.95709 7.98833 8.89318 7.92495L5.96136 4.99995Z' />
            }
            viewBox='0 0 10 10'
          />
        </div>

        <div className={styles.modalText}>
          <div className={styles.modalInfo}>
            <h2 style={{ color: colors.text[100] }}>{props.matchUp.title}</h2>
          </div>

          {!props.isSignedUp && !props.isWithin24Hours && (
            <>
              <p style={{ color: colors.text[100] }}>
                In order to join this MatchUp you have to commit a deposit of
                5€.
              </p>

              <p style={{ color: colors.text[100] }}>
                You will get the deposit back once the organizer confirms your
                attendance. In case you cannot make it, you can cancel the
                MatchUp up to 24 hours in advance and get your deposit back. If
                you don&apos;t show up or cancel later, your deposit will be
                donated to one of our local charities.
              </p>
            </>
          )}

          {!props.isSignedUp && props.isWithin24Hours && (
            <>
              <p style={{ color: colors.text[100] }}>
                In order to join this MatchUp you have to commit a deposit of
                5€.
              </p>

              <p style={{ color: colors.text[100] }}>
                This MatchUp starts within 24 hours. You will get the deposit
                back once the organizer confirms your attendance. If you cancel
                or not show up your deposit will be donated to one of our local
                charities.
              </p>
            </>
          )}

          {props.isSignedUp && !props.isWithin24Hours && (
            <>
              <p style={{ color: colors.text[100] }}>
                If you cancel now you will get back your deposit.
              </p>

              <p style={{ color: colors.text[100] }}>
                If you don&apos;t cancel within 24 hours in advance or if you
                don&apos;t show up to the MatchUp, you will donate your deposit
                to one of our local charities.
              </p>
            </>
          )}

          {props.isSignedUp && props.isWithin24Hours && (
            <>
              <p
                style={{ color: colors.text[100] }}
                className={styles.modalCommitText}
              >
                The MatchUp starts within 24 hours. If you cancel now, you
                donate your deposit to one of our local charities.
              </p>
            </>
          )}
        </div>

        <a
          style={{ color: colors.primary[100] }}
          className={styles.modalPolicyLink}
        >
          Read more about our local charities and commitment policy
        </a>
        <Button
          variant='primary'
          callback={
            props.isSignedUp ? () => handleCancel() : () => handleCommit()
          }
          text={
            !props.isSignedUp
              ? 'Commit'
              : props.isWithin24Hours
              ? 'Donate 5€'
              : 'Cancel'
          }
          disabled={false}
        ></Button>
      </div>
    </div>
  );
};

export default ConfirmJoinModal;
