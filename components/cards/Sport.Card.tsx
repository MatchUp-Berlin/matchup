import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Sport.Card.module.scss';

export interface ISportCardProps {
  title: string;
  subTitle: string;
  image: any;
  callback: () => void;
}

const SportCard: React.FunctionComponent<ISportCardProps> = (props) => {
  const { colors, shadows } = useTheme();
  return (
    <div
      onClick={props.callback}
      className={styles.wrapper}
      style={{ boxShadow: shadows.small, backgroundColor: colors.background[80] }}
    >
      <div className={styles.imageWrapper}>
        <Image className={styles.cover} alt={props.subTitle} layout={'responsive'} src={props.image}></Image>
      </div>
      <div className={styles.text}>
        <p className="highlight-1" style={{ color: colors.text[100] }}>
          {props.title}
        </p>
        <p style={{ color: colors.text[60] }}>{props.subTitle}</p>
      </div>
    </div>
  );
};

export default SportCard;

/* 

USAGE:

<SportCard
  title="Football"
  subTitle="Start a football match with locals"
  image={football}
  callback={() => {}}
></SportCard>

*/
