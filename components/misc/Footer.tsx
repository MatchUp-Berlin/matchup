import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Footer.module.scss';

export interface IFooterProps {
  leftSide: React.ReactNode;
  rightButton: React.ReactNode;
  progress?: number | null;
}

const Footer: React.FunctionComponent<IFooterProps> = ({ leftSide, rightButton, progress }) => {
  const { colors, darkMode } = useTheme();

  return (
    <footer
      className={styles.footer}
      style={{ borderTopColor: darkMode ? '#515157' : '#DDDDDD', backgroundColor: colors.background[100] }}
    >
      <div
        className={styles.progressBar}
        style={{
          width: progress ? `${progress}%` : 0,
          backgroundColor: colors.primary['100'],
        }}
      ></div>
      <div className={styles.mainWrapper}>
        <div className={styles.leftSide} style={{ color: colors.text[100] }}>
          {leftSide}
        </div>
        <div className={styles.rightSide}>{rightButton}</div>
      </div>
    </footer>
  );
};

export default Footer;
