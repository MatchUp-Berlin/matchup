import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Participant.Card.module.scss';

export interface IParticipantCardProps {
  user: User;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({ user }) => {
  const { profileImage, givenName, familyName, signups } = user;
  const { colors, shadows } = useTheme();
  return (
    <article
      className={styles.participantCardWrapper}
      style={{
        backgroundColor: colors.background[80],
        boxShadow: shadows.medium,
      }}
    >
      <div className="infoContainer">
        <p className="highlight-1" style={{ color: colors.text[100] }}>{`${givenName} ${familyName}`}</p>
        <p style={{ color: colors.text[80] }}>{`Participated in ${signups.length} MatchUps`}</p>
        <p style={{ color: colors.text[60] }}>Speaks: </p>
      </div>
      <div className="avatarContainer">
        <Avatar size={'medium'} image={profileImage} />
      </div>
    </article>
  );
};

export default ParticipantCard;
