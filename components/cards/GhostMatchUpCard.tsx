import React from 'react';
import styles from './styles/GhostMatchUpCard.module.scss';
import { useTheme } from '../../contexts/Theme';

export interface IGhostMatchUpCard {
  size: 'small' | 'medium' | 'large';
}

const GhostMatchUpCard: React.FunctionComponent<IGhostMatchUpCard> = (
  props
) => {
  const { shadows } = useTheme();
  return (
    <section>
      <div
        className={
          props.size === 'large' ? styles.cardWrapperLarge : styles.cardWrapper
        }
        style={{ boxShadow: shadows.medium }}
      >
        <div
          className={
            props.size === 'large'
              ? styles.imageWrapperLarge
              : styles.imageWrapper
          }
        >
          image
        </div>
        <div
          className={
            props.size === 'large'
              ? styles.infoWrapperLarge
              : styles.infoWrapper
          }
        >
          <div
            className={
              props.size === 'large'
                ? styles.textWrapperLarge
                : styles.textWrapper
            }
          >
            <div className={styles.ghostText}>text</div>
            <div className={styles.ghostText}>text</div>
            {props.size !== 'small' && <div className={styles.ghostInfo}></div>}
          </div>
          {props.size !== 'small' && (
            <div className={styles.pillsWrapper}>
              <div className={styles.ghostPill}>pill</div>
              <div className={styles.ghostPill}>pill</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GhostMatchUpCard;
