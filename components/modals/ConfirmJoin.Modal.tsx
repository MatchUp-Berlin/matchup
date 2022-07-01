import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/ConfirmJoin.Modal.module.scss';
import Button from '../misc/Button';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { addUserToMatchUp } from '../../utils/Mutation/addUserToMatchUp.util';
import { removeUserFromMatchUp } from '../../utils/Mutation/removeUserFromMatchUp.util';

export interface IConfirmJoinModalProps {
  matchUp: MatchUp;
  isSignedUp: boolean;
  isWithin24Hours: boolean;
  setShowModal: Function;
}

const ConfirmJoinModal: React.FunctionComponent<IConfirmJoinModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();

  const { user } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
  ]);

  const handleCommit = () => {
    addUserToMatchUp({
      userId: user.username || '',
      matchUpId: props.matchUp.id || '',
    }).then((res) => {
      props.setShowModal(false);
    });
  };

  const handleCancel = () => {
    console.log('HANDLE CANCEL');

    removeUserFromMatchUp(user.username || '', props.matchUp.id || '')
      .then((res: any) => {
        props.setShowModal(false);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <div
      style={{ backgroundColor: colors.secondary }}
      className={styles.overlay}
    >
      <div
        style={{ backgroundColor: 'white' }}
        className={styles.modalContainer}
      >
        <div className={styles.modalInfo}>
          <h2 className={styles.modalHeading2}>{props.matchUp.title}</h2>
        </div>

        {!props.isSignedUp && !props.isWithin24Hours && (
          <>
            <p className={styles.modalCommitTextPrimary}>
              In order to join this MatchUp you have to commit a deposit of 5€.
            </p>

            <p className={styles.modalCommitTextSecondary}>
              You will get the deposit back once the organizer confirms your
              attendance. In case you cannot make it, you can cancel the MatchUp
              up to 24 hours in advance and get your deposit back. If you don't
              show up or cancel later, your deposit will be donated to one of
              our local charities.
            </p>
          </>
        )}

        {!props.isSignedUp && props.isWithin24Hours && (
          <>
            <p className={styles.modalCommitTextPrimary}>
              In order to join this MatchUp you have to commit a deposit of 5€.
            </p>

            <p className={styles.modalCommitTextSecondary}>
              This MatchUp starts within 24 hours. You will get the deposit back
              once the organizer confirms your attendance. If you cancel or not
              show up your deposit will be donated to one of our local
              charities.
            </p>
          </>
        )}

        {props.isSignedUp && !props.isWithin24Hours && (
          <>
            <p className={styles.modalCommitTextPrimary}>
              If you cancel now you will get back your deposit.
            </p>

            <p className={styles.modalCommitTextSecondary}>
              If you don't cancel within 24 hours in advance or if you don't
              show up to the MatchUp, you will donate your deposit to one of our
              local charities.
            </p>
          </>
        )}

        {props.isSignedUp && props.isWithin24Hours && (
          <>
            <p className={styles.modalCommitTextPrimary}>
              The MatchUp starts within 24 hours. If you cancel now, you donate
              your deposit to one of our local charities.
            </p>
          </>
        )}

        <a className={styles.modalPolicyLink}>
          Read more about our local charities and commitment policy
        </a>
        <Button
          className={styles.modalButton}
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
