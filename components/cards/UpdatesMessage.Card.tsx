import React from 'react';
import { useTheme } from '../../contexts/Theme';
import SmallButton from '../misc/SmallButton';
import styles from './styles/UpdatesMessage.Card.module.scss';
import { Update } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';
import moment from 'moment';

export interface IUpdatesMessageCardProps {
  update: Update;
  organizerId: string;
}

const UpdatesMessageCard: React.FunctionComponent<IUpdatesMessageCardProps> = (props) => {
  const { givenName, familyName } = props.update.user;
  const { content, createdAt } = props.update;
  const { colors, shadows } = useTheme();

  return (
    <>
      <div
        className={styles.updateMessageCardWrapper}
        style={{
          backgroundColor: colors.background[60],
          boxShadow: shadows.medium,
        }}
      >
        <p className={'fat'} style={{ color: colors.text[100] }}>
          {givenName} {familyName}
        </p>
        <p style={{ color: colors.text[100] }}>{content}</p>
        <p className={styles.time + ' small'} style={{ color: colors.text[60] }}>
          {moment(createdAt).format('MMM D, H:mm')}
        </p>
      </div>
    </>
  );
};

export default UpdatesMessageCard;
