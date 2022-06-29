import React from 'react';
import styles from './styles/Divider.module.scss';
import { useTheme } from '../../contexts/Theme';

export interface ILoadingSpinnerProps {}

const LoadingSpinner: React.FunctionComponent<ILoadingSpinnerProps> = (
  props
) => {
  const { darkMode, colors } = useTheme();
  return (
    <div
      className={styles.divider}
      style={{
        borderColor: darkMode ? colors.background[60] : '#DDDDDD',
      }}
    ></div>
  );
};

export default LoadingSpinner;
