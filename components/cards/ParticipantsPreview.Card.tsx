import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import SmallButton from '../misc/SmallButton';
import styles from './styles/ParticipantsPreview.Card.module.scss';

export interface IParticipantsPreviewCardProps {
  users: Pick<User, 'profileImage' | 'id'>[];
}

const ParticipantsPreviewCard: React.FunctionComponent<IParticipantsPreviewCardProps> = ({ users }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarPreview}>
        {users.slice(0, 6).map((user) => (
          <Avatar key={user.id} size={'small'} image={user.profileImage} />
        ))}
      </div>
      <SmallButton callback={() => console.log('clicked')} />
    </div>
  );
};

export default ParticipantsPreviewCard;
