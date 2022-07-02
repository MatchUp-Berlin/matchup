import React from 'react';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/RateMatchUp.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';
import { Avatar } from '../misc';

export interface IRateMatchUpModalProps {
  matchUp: MatchUp;
}

const RateMatchUpModal: React.FunctionComponent<IRateMatchUpModalProps> = ({
  title,
  image,
}) => {
  const { colors, shadows } = useTheme();
  return (
    <div className={styles.modalWrapper}>
      <div
        style={{
          backgroundColor: colors.background[100],
          boxShadow: shadows.medium,
        }}
        className={styles.modalContainer}
      >
        <h3 style={{ color: colors.text[100] }}>Rate this MatchUp</h3>
        <Avatar size={'large'} image={image} />
        <h2 style={{ color: colors.text[100] }}>{title}</h2>
      </div>
    </div>
  );
};

export default RateMatchUpModal;
