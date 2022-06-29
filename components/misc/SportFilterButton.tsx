import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/SportFilterButton.module.scss';

export interface ISportFilterButtonProps {
  setCategories: Dispatch<SetStateAction<string[]>>;
  icon: any;
  active?: boolean;
  category: 'basketball' | 'football' | 'tennis' | 'ultimate-frisbee' | 'beach-volleyball' | 'volleyball';
}

const SportFilterButton: React.FunctionComponent<ISportFilterButtonProps> = (props) => {
  const { shadows, colors } = useTheme();
  return (
    <div
      onClick={() =>
        props.active
          ? props.setCategories((prev) => prev.filter((cat) => cat !== props.category))
          : props.setCategories((prev) => [...prev, props.category])
      }
      className={styles.wrapper}
      style={{
        boxShadow: shadows.small,
        backgroundColor: props.active ? colors.background[60] : colors.background[80],
        borderColor: colors.primary[100],
        borderWidth: props.active ? 4 : 0,
      }}
    >
      <Image src={props.icon} alt="sports-filter-button" width="35px" height="35px"></Image>
    </div>
  );
};

export default SportFilterButton;
