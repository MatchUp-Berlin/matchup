import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Organizer.Card.module.scss';

export interface IOrganizerCardProps {
  user: User;
}

const OrganizerCard: React.FunctionComponent<IOrganizerCardProps> = ({ user }) => {
  const { profileImage, givenName, familyName, signups } = user;
  const { colors } = useTheme();
  return (
    <>
      <div className={styles.organizerCardWrapper}>
        <div className="infoContainer">
          <h3 style={{ color: colors.text[100] }}>{`${givenName} ${familyName}`}</h3>
          <div className={styles.subtext}>
            <p style={{ color: colors.text[60] }}>{`Participated in ${signups.length} MatchUps`}</p>
            <p style={{ color: colors.text[60] }}>Organizer</p>
          </div>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar size={'medium'} image={profileImage} />
        </div>
      </div>
    </>
  );
};

export default OrganizerCard;
