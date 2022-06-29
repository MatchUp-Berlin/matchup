import React from 'react';
import styles from './styles/LoadingSpinner.module.scss';

export interface ILoadingSpinnerProps {}

const LoadingSpinner: React.FunctionComponent<ILoadingSpinnerProps> = (props) => {
  return <div className={styles.chaoticOrbit}></div>;
};

export default LoadingSpinner;
