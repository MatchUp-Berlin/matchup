import React from 'react';
import styles from './styles/GhostMatchUpCard.module.scss';

export interface IGhostMatchUpCard {
  size: 'small' | 'medium' | 'large';
}

const GhostMatchUpCard: React.FunctionComponent<IGhostMatchUpCard> = (
  props
) => {
  return (
    <section>
      <div
        className={
          props.size === 'small' ? styles.cardWrapper : styles.cardWrapperLarge
        }
      >
        <div
          className={
            props.size === 'small'
              ? styles.imageWrapper
              : styles.imageWrapperLarge
          }
        ></div>
        <div className={styles.infoWrapper}>
          <div className={styles.textWrapper}>
            <div className={styles.ghostText}></div>
            <div className={styles.ghostText}></div>
            {props.size !== 'small' && <div className={styles.ghostInfo}></div>}
          </div>
          {props.size !== 'small' && (
            <div className={styles.pillsWrapper}>
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
