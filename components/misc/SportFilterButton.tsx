import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/SportFilterButton.module.scss';

export interface ISportFilterButtonProps {
  icon: any;
  active: boolean;
}

const SportFilterButton: React.FunctionComponent<ISportFilterButtonProps> = (props) => {
  const { shadows, colors } = useTheme();
  return (
    <div
      className={styles.wrapper}
      style={{
        boxShadow: shadows.small,
        backgroundColor: props.active ? colors.background[60] : colors.background[80],
      }}
    >
      <Image src={props.icon} alt="sports-filter-button" width="35px" height="35px"></Image>
    </div>
  );
};

export default SportFilterButton;
