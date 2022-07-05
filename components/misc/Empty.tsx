import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { emptyDark, emptyLight } from '../icons';
import styles from './styles/Empty.module.scss';

const Empty: React.FunctionComponent<{text: string, height?: string}> = ({ text, height }) => {
  const { colors, darkMode } = useTheme();
  return (
    <div className={styles.wrapper} style={{height: height ? height : "60vh"}}>
      <svg width="80" fill={colors.overlay[60]} viewBox={emptyLight.viewBox}>
        {darkMode ? emptyDark.path : emptyLight.path}
      </svg>
      <p style={{ color: colors.text[60] }}>{text}</p>
    </div>
  );
};

export default Empty;
