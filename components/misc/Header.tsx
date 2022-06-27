import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Header.module.scss';

export interface IHeaderProps {
  imageUrl: string;
  title: string;
  leftButton?: React.ReactNode;
  rightButtons?: [React.ReactNode];
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper} style={{ backgroundImage: colors.gradient.secondary }}>
      <div className={styles.leftButton}>{props.leftButton}</div>
    </div>
  );
};

export default Header;
