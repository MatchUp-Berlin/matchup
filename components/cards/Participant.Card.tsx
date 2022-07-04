import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Participant.Card.module.scss';
import avatar from '../../public/default-avatar.png';
import { toggleAttendance } from '../../utils/Mutation/toggleAttendance.util';

export interface IParticipantCardProps {
  user: User;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({
  user,
}) => {
  const { profileImage, givenName, familyName, attended, signup } = user;
  const { colors, shadows } = useTheme();

  const toggleAttended = () => {
    signup && toggleAttendance(signup).then((res) => console.log(res));
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
          attended={attended || false}
          highlight={true}
          size={'medium'}
          image={profileImage || avatar}
        />
      </div>
    </article>
  );
};

export default ParticipantCard;
