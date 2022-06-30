import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useTheme } from '../../contexts/Theme';
import { getUserById } from '../../utils/Query/getUserById.util';
import { ParticipantCard } from '../cards';
import styles from './styles/Participants.Modal.module.scss';

export interface IParticipantsModalProps {
  opened: boolean;
  opening: boolean;
  closing: boolean;
  hide: (ms: number) => void;
}

const ParticipantsModal: React.FunctionComponent<IParticipantsModalProps> = (props) => {
  const { colors, shadows } = useTheme();
  const userQuery = useQuery('user', () => getUserById('54955977-c461-4943-9e66-288b3ba065ba'), {});

  function getClasses () {
    if (props.opened) {
      return styles.wrapper + ' ' + styles.open;
    }
    if (props.opening) {
      return styles.wrapper + ' ' + styles.opening;
    }
    if (!props.opened) {
      return styles.wrapper + ' ' + styles.closed;
    }
    if (props.closing) {
      return styles.wrapper + ' ' + styles.closing;
    }
  }
  return (
    <>
      <div
        className={getClasses()}
        style={{ backgroundColor: colors.background[100], boxShadow: shadows.large }}
      >
        <button
          onClick={() => {
            props.hide(1000);
          }}
        >
          x
        </button>
        {userQuery.isSuccess && userQuery.data ? <ParticipantCard user={userQuery.data} /> : <></>}
      </div>
    </>
  );
};

export default ParticipantsModal;
