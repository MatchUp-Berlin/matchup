import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import avatar from '../../public/default-avatar.png';
import styles from './styles/Organizer.Card.module.scss';

export interface IOrganizerCardProps {
  user: User;
}

const OrganizerCard: React.FunctionComponent<IOrganizerCardProps> = (props) => {
  const { colors } = useTheme();
  console.log(props);
  
  return (
    <>
      <div className={styles.organizerCardWrapper}>
        <div>
          <p
            className="highlight-1"
            style={{ color: colors.text[100] }}
          >{`${props.user?.givenName} ${props.user?.familyName}`}</p>
          <div className={styles.subtext}>
            <p
              style={{ color: colors.text[60] }}
            >{`Participated in ${props?.user?.signups?.items.length || 0} MatchUps`}</p>
            <p className="small" style={{ color: colors.text[60] }}>
              Organizer
            </p>
          </div>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar size={'medium'} image={props?.user?.profileImage ? props?.user?.profileImage : avatar} />
        </div>
      </div>
    </>
  );
};

export default OrganizerCard;
