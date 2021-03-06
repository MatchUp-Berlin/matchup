import React from 'react';
import styles from './styles/GhostMatchUpCard.module.scss';
import { useTheme } from '../../contexts/Theme';

export interface IGhostMatchUpCard {
  size: 'small' | 'medium' | 'large';
}

const GhostMatchUpCard: React.FunctionComponent<IGhostMatchUpCard> = (props) => {
  const { shadows, colors, darkMode } = useTheme();
  return (
    <section style={darkMode ? { opacity: 0.3 } : {}}>
      {/* CARD WRAPPER */}
      <div
        className={props.size === 'large' ? styles.cardWrapperLarge : styles.cardWrapper}
        style={
          props.size === 'small'
            ? {
                boxShadow: shadows.medium,
                backgroundColor: colors.background[60],
                height: '100px',
              }
            : {
                boxShadow: shadows.medium,
                backgroundColor: colors.background[60],
              }
        }
      >
        {/* IMAGE WRAPPER */}
        <div className={props.size === 'large' ? styles.imageWrapperLarge : styles.imageWrapper}></div>
        {/* TITLE */}
        {props.size === 'large' && <div className={styles.ghostTitle}></div>}
        {/* INFO */}
        <div className={props.size === 'large' ? styles.infoWrapperLarge : styles.infoWrapper}>
          {/* text */}
          <div className={props.size === 'large' ? styles.textWrapperLarge : styles.textWrapper}>
            {props.size !== 'large' && <div className={styles.ghostText + ' ' + styles.textTitle}></div>}
            <div className={styles.ghostText + ' ' + styles.textOne}></div>
            <div className={styles.ghostText + ' ' + styles.textTwo}></div>
            {props.size !== 'small' && <div className={styles.ghostText + ' ' + styles.textThree}></div>}
          </div>
          {/* pills */}
          {props.size !== 'small' && (
            <div className={props.size === 'large' ? styles.pillsWrapperLarge : styles.pillsWrapper}>
              <div className={styles.ghostPill}></div>
              <div className={styles.ghostPill}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GhostMatchUpCard;
