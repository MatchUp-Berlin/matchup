import React from 'react';
import { User } from '../../utils/types/user.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import avatar from '../../public/default-avatar.png';
import styles from './styles/Organizer.Card.module.scss';
import Link from 'next/link';

export interface IOrganizerCardProps {
  organizer: User;
}

const OrganizerCard: React.FunctionComponent<IOrganizerCardProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Link href={`/Profile/${props.organizer.id}`}>
      <div className={styles.organizerCardWrapper}>
        <div>
          <p
            className="highlight-1"
            style={{ color: colors.text[100] }}
          >{`${props.organizer?.givenName} ${props.organizer?.familyName}`}</p>
          <div className={styles.subtext}>
            <p style={{ color: colors.text[60] }}>{`Participated in ${
              props?.organizer?.signups?.items ? props?.organizer?.signups?.items.length : 0
            } MatchUps`}</p>
            <p className="small" style={{ color: colors.text[60] }}>
              Organizer
            </p>
          </div>
        </div>
        <div className={styles.avatarContainer}>
          <Avatar
            size={'medium'}
            image={props?.organizer?.profileImage ? props?.organizer?.profileImage : avatar}
          />
        </div>
      </div>
    </Link>
  );
};

export default OrganizerCard;
