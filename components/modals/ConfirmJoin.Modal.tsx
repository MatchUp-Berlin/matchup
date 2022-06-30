import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { MatchUp } from '../../utils/types/MatchUp.Type';
import styles from './styles/ConfirmJoin.Modal.module.scss';

export interface IConfirmJoinModalProps {
  matchUp: MatchUp;
}

// a4358bf3-9ef1-4c06-b023-f87a5e39cbf6

const ConfirmJoinModal: React.FunctionComponent<IConfirmJoinModalProps> = (
  props
) => {
  const { colors, shadows } = useTheme();

  return <div className={styles.container}>Hallo</div>;
};

export default ConfirmJoinModal;
