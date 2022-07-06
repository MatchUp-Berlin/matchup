import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/BigPill.Card.module.scss';

export interface IBigPillProps {
  text: string;
  title: string;
  filled: boolean;
}

const BigPill: React.FunctionComponent<IBigPillProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <p className={styles.title} style={{ color: colors.text[60] }}>
        {props.title}
      </p>
      <div
        className={styles.pill}
        style={{
          borderColor: colors.primary[100],
          color: props.filled ? 'white' : colors.primary[100],
          backgroundColor: props.filled ? colors.primary[100] : 'transparent',
        }}
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default BigPill;
