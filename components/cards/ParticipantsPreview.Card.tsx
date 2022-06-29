import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import SmallButton from '../misc/SmallButton';
import styles from './styles/ParticipantsPreview.Card.module.scss';

export interface IParticipantsPreviewCardProps {
  users: Pick<User, 'profileImage' | 'id'>[];
}

const ParticipantsPreviewCard: React.FunctionComponent<IParticipantsPreviewCardProps> = ({ users }) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarPreview}>
        {users.length == 0 ? (
          <div className={styles.empty}>
            <p style={{ color: colors.text[60] }}>No one has signed up yet...</p>
          </div>
        ) : (
          users.slice(0, 5).map((user) => <Avatar key={user.id} size={'small'} image={user.profileImage} />)
        )}
      </div>
      <SmallButton callback={() => console.log('clicked')} />
    </div>
  );
};

export default ParticipantsPreviewCard;
