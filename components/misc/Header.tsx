import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Header.module.scss';

export interface IHeaderProps {
  imageUrl?: string;
  title?: string;
  leftButton?: React.ReactNode;
  rightButtons?: React.ReactNode[];
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { colors, darkMode } = useTheme();

  /* ---- NO IMAGE VERSION ---- */
  if (!props.imageUrl)
    return (
      <div className={styles.wrapper} style={darkMode ? {} : { backgroundImage: colors.gradient.secondary }}>
        <div className={styles.buttons}>
          <div className={styles.leftButton}>{props.leftButton}</div>
          <div className={styles.rightButtons}>{props.rightButtons}</div>
        </div>
        <h2>{props.title}</h2>
      </div>
    );
  /* ---- IMAGE VERSION ---- */ else {
    return (
      <div
        className={styles.wrapper}
        style={
          darkMode
            ? {}
            : {
                backgroundImage: `url(${props.imageUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: '50%',
                height: '25vh',
              }
        }
      >
        <div className={styles.buttons}>
          <div className={styles.leftButton}>{props.leftButton}</div>
          <div className={styles.rightButtons}>{props.rightButtons}</div>
        </div>
      </div>
    );
  }
};

export default Header;
