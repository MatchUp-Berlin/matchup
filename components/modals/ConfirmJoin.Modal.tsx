import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/ConfirmJoin.Modal.module.scss';
import Button from '../misc/Button';

export interface IConfirmJoinModalProps {
  matchUp: MatchUp;
}

// a4358bf3-9ef1-4c06-b023-f87a5e39cbf6

const ConfirmJoinModal: React.FunctionComponent<IConfirmJoinModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();

  const handleCommitClick = () => {
    console.log('click');
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
          <h2 className={styles.modalHeading}>Join {props.matchUp.title}</h2>
          {/* <p>{props.matchUp.location}</p>
          <p>{moment(props.matchUp.date).format('H:m dddd')}</p> */}
        </div>

        <p className={styles.modalCommitTextPrimary}>
          In order to join this MatchUp you have to commit a deposit of 5€.
        </p>

        <p className={styles.modalCommitTextSecondary}>
          You will get the deposit back once the organizer confirms your
          attendance. In case you cannot make it, you can cancel the MatchUp up
          to 24 hours in advance. If you fail to do so, your deposit will not be
          returned to you. Instead it will be donated to a local charity in your
          city.
        </p>

        <a className={styles.modalPolicyLink}>
          Read more about our commitment policy
        </a>
        <Button
          className={styles.modalButton}
          variant='primary'
          callback={() => handleCommitClick()}
          text='Commit'
          disabled={false}
        ></Button>
      </div>
    </div>
  );
};

export default ConfirmJoinModal;
