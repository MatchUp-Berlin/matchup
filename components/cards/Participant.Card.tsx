import React, { useEffect, useState } from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Participant.Card.module.scss';
import avatar from '../../public/default-avatar.png';
import { toggleAttendance } from '../../utils/Mutation/toggleAttendance.util';
import { useQuery, useQueryClient } from 'react-query';
import { SignUp } from '../../utils/types/SignUp.Type';

export interface IParticipantCardProps {
  user: User;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({
  user,
}) => {
  const { profileImage, givenName, familyName, signup } = user;
  const { colors, shadows } = useTheme();
  const queryClient = useQueryClient();

  const [attendanceToggled, setAttendanceToggled] = useState<boolean>(false);

  const { isLoading, data } = useQuery(['signup', attendanceToggled], () => {
    // get SignUp
  });

  const toggleAttended = async () => {
    await toggleAttendance(signup?.id || '').then((res) => {
      queryClient.invalidateQueries(['matchup', signup?.matchUpId]);
      setAttendanceToggled((prev) => !prev);
    });
  };

  console.log('signup', signup);

  console.log('data', data);

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
          attended={data?.attended || false}
          highlightable={true}
          size={'medium'}
          image={profileImage || avatar}
        />
      </div>
    </article>
  );
};

export default ParticipantCard;
