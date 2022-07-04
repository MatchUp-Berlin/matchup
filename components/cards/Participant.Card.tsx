import React, { useEffect, useState } from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Participant.Card.module.scss';
import avatar from '../../public/default-avatar.png';
import { toggleAttendance } from '../../utils/Mutation/toggleAttendance.util';
import { useQueryClient } from 'react-query';

export interface IParticipantCardProps {
  user: User;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({
  user,
}) => {
  const { profileImage, givenName, familyName, signup } = user;
  const { colors, shadows } = useTheme();
  const queryClient = useQueryClient();

  const toggleAttended = async () => {
    await toggleAttendance(signup?.id || '').then((res) => {
      queryClient.invalidateQueries(['matchup', signup?.matchUpId]);
    });
  };

  return (
    <article
      className={styles.participantCardWrapper}
      style={{
        backgroundColor: colors.background[80],
        boxShadow: shadows.medium,
      }}
    >
      <div className={styles.info}>
        <p
          className='highlight-1'
          style={{ color: colors.text[100] }}
        >{`${givenName} ${familyName}`}</p>
        {/* <p style={{ color: colors.text[80] }}>{`Participated in ${signups.length} MatchUps`}</p> */}
        <p style={{ color: colors.text[60] }}>Speaks: </p>
      </div>

      <div className={styles.avatar} onClick={() => toggleAttended()}>
        <Avatar
          attended={signup?.attended || false}
          highlightable={true}
          size={'medium'}
          image={profileImage || avatar}
        />
      </div>
    </article>
  );
};

export default ParticipantCard;
