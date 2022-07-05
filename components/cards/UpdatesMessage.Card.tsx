import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/UpdatesMessage.Card.module.scss';
import { Update } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';
import moment from 'moment';

export interface IUpdatesMessageCardProps {
  update: Update;
  organizer: User;
}

const UpdatesMessageCard: React.FunctionComponent<IUpdatesMessageCardProps> = (props) => {
  const { content, createdAt, userId } = props.update;
  const { colors, shadows, darkMode } = useTheme();
  const { id } = props.organizer;

  return (
    <>
      <div
        className={styles.updateMessageCardWrapper}
        style={{
          backgroundColor: colors.background[60],
          boxShadow: darkMode ? shadows.medium : shadows.small,
        }}
      >
        <p className={'fat'} style={{ color: userId === id ? colors.primary[100] : colors.text[80] }}>
          {props.update.user?.givenName + ' ' + props.update.user?.familyName} {id === userId && ' (Organizer)'}
        </p>
        <p style={{ color: colors.text[80] }}>{content}</p>
        <p className={styles.time + ' small'} style={{ color: colors.text[60] }}>
          {moment(createdAt).format('MMM D, H:mm')}
        </p>
      </div>
    </>
  );
};

export default UpdatesMessageCard;
