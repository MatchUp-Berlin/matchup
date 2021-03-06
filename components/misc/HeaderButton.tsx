import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/HeaderButton.module.scss';

export interface IHeaderButtonProps {
  icon: any; // has to be an SVG path
  viewBox: string;
  callback: () => any;
  stayLight?: boolean;
}

const HeaderButton: React.FunctionComponent<IHeaderButtonProps> = (props) => {
  const { colors, shadows } = useTheme();
  return (
    <div
      onClick={props.callback}
      className={styles.btn}
      style={{ backgroundColor: props.stayLight ? "white" : colors.background[60], boxShadow: shadows.small }}
    >
      <svg className={styles.icon} viewBox={props.viewBox} fill={colors.text[60]}>
        {props.icon}
      </svg>
    </div>
  );
};

export default HeaderButton;

/* 

USAGE:

<HeaderButton
  viewBox="0 0 10 10"
  icon={
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M5.96126 5L8.89307 2.075C9.02146 1.94661 9.09359 1.77248 9.09359 1.59091C9.09359 1.40934 9.02146 1.23521 8.89307 1.10682C8.76468 0.978432 8.59055 0.906303 8.40898 0.906303C8.22741 0.906303 8.05328 0.978432 7.92489 1.10682L4.99989 4.03864L2.07489 1.10682C1.9465 0.978432 1.77237 0.906303 1.5908 0.906303C1.40923 0.906303 1.2351 0.978432 1.10671 1.10682C0.978321 1.23521 0.906193 1.40934 0.906193 1.59091C0.906193 1.77248 0.978321 1.94661 1.10671 2.075L4.03853 5L1.10671 7.925C1.0428 7.98839 0.992081 8.0638 0.957466 8.14688C0.922851 8.22997 0.905029 8.31908 0.905029 8.40909C0.905029 8.4991 0.922851 8.58822 0.957466 8.6713C0.992081 8.75439 1.0428 8.8298 1.10671 8.89318C1.17009 8.95709 1.2455 9.00781 1.32859 9.04243C1.41168 9.07704 1.50079 9.09486 1.5908 9.09486C1.68081 9.09486 1.76993 9.07704 1.85301 9.04243C1.9361 9.00781 2.01151 8.95709 2.07489 8.89318L4.99989 5.96137L7.92489 8.89318C7.98828 8.95709 8.06369 9.00781 8.14677 9.04243C8.22986 9.07704 8.31897 9.09486 8.40898 9.09486C8.49899 9.09486 8.58811 9.07704 8.67119 9.04243C8.75428 9.00781 8.82969 8.95709 8.89307 8.89318C8.95698 8.8298 9.0077 8.75439 9.04232 8.6713C9.07693 8.58822 9.09475 8.4991 9.09475 8.40909C9.09475 8.31908 9.07693 8.22997 9.04232 8.14688C9.0077 8.0638 8.95698 7.98839 8.89307 7.925L5.96126 5Z"
    />
  }
  callback={() => console.log('Pressed')}
/>

*/
