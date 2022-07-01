import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/ConfirmJoin.Modal.module.scss';
import Button from '../misc/Button';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { addUserToMatchUp } from '../../utils/Mutation/addUserToMatchUp.util';

export interface IConfirmJoinModalProps {
  matchUp: MatchUp;
  join: boolean;
  isWithin24Hours: boolean;
}

const ConfirmJoinModal: React.FunctionComponent<IConfirmJoinModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();

  const { user } = useAuthenticator((context) => [
    context.authStatus,
    context.user,
  ]);

  const handleCommitClick = () => {
    addUserToMatchUp({
      userId: user.username || '',
      matchUpId: props.matchUp.id || '',
    }).then((res) => {
      console.log('Successfully signed up');
    });
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
          <h2 className={styles.modalHeading}>
            {props.join ? 'Join' : 'Cancel'} {props.matchUp.title}
          </h2>
        </div>

        {props.join && !props.isWithin24Hours && (
          <>
            <p className={styles.modalCommitTextPrimary}>
              "In order to join this MatchUp you have to commit a deposit of
              5€."
            </p>

            <p className={styles.modalCommitTextSecondary}>
              "You will get the deposit back once the organizer confirms your
              attendance. In case you cannot make it, you can cancel the MatchUp
              up to hours in advance. If you fail to do so, your deposit will
              not be returned to you. Instead it will be donated to a local
              charity in your city." : "blabla"
            </p>
          </>
        )}

        <a className={styles.modalPolicyLink}>
          Read more about our commitment policy
        </a>
        <Button
          className={styles.modalButton}
          variant='primary'
          callback={() => handleCommitClick()}
          text={props.join ? 'Commit' : 'Cancel'}
          disabled={false}
        ></Button>
      </div>
    </div>
  );
};

export default ConfirmJoinModal;
