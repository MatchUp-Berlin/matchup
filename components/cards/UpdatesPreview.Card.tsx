import React from 'react';
import { useTheme } from '../../contexts/Theme';
import SmallButton from '../misc/SmallButton';
import styles from './styles/UpdatesPreview.Card.module.scss';
import { Update } from '../../utils/types/Update.Type';

export interface IUpdatesPreviewCardProps {
  updates: Update[];
  organizerId: string;
}

const UpdatesPreviewCard: React.FunctionComponent<IUpdatesPreviewCardProps> = (props) => {
  const { colors } = useTheme();

  return (
    <>
      <div className={styles.header}>
        <p className={'highlight-1'} style={{ color: colors.text[80] }}>
          Latest Updates
        </p>
        <SmallButton callback={() => console.log('Pressed')} />
      </div>
      <div className={styles.updates}>
        {props.updates.map((update) => {
          return (
            <>
              <div key={update.id} className={styles.update}>
                <div className={styles.left}>
                  <p className={styles.message + ' small'} style={{ color: colors.text[80] }}>
                    <b style={{ color: props.organizerId === update.userId ? colors.primary[100] : colors.text[80] }}>
                      {update.user.givenName}:{' '}
                    </b>
                    {update.content}
                  </p>
                </div>
                <p className={styles.time} style={{ color: colors.secondary }}>
                  {update.timestamp}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default UpdatesPreviewCard;
