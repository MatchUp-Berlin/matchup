import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Slots.Card.module.scss';

export interface ISlotsCardProps {
  slots: number;
  attending: number;
}

const SlotsCard: React.FunctionComponent<ISlotsCardProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} style={{ color: colors.text[60] }}>
        Coming
      </p>
      <div
        className={styles.pill}
        style={{
          borderColor: colors.primary[100],
          color: props.slots - props.attending == 0 ? 'white' : colors.primary[100],
          backgroundColor: props.slots - props.attending == 0 ? colors.primary[100] : 'transparent',
        }}
      >
        <p className="fat">
          {props.attending} / {props.slots}
        </p>
      </div>
    </div>
  );
};

export default SlotsCard;
