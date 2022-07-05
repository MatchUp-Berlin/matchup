import React from 'react';
import styles from './styles/GhostMatchUpCard.module.scss';
import { useTheme } from '../../contexts/Theme';

export interface IGhostMatchUpCard {
  size: 'small' | 'medium' | 'large';
}

const GhostMatchUpCard: React.FunctionComponent<IGhostMatchUpCard> = (
  props
) => {
  const { shadows, colors } = useTheme();
  return (
    <section>
      <div
        className={
          props.size === 'large' ? styles.cardWrapperLarge : styles.cardWrapper
        }
        style={{
          boxShadow: shadows.medium,
          backgroundColor: colors.background['80'],
        }}
      >
        <div
          className={
            props.size === 'large'
              ? styles.imageWrapperLarge
              : styles.imageWrapper
          }
        ></div>
        <div className={styles.ghostTitle}></div>
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
            <div className={styles.ghostText + ' ' + styles.textOne}></div>
            <div className={styles.ghostText + ' ' + styles.textTwo}></div>
            {props.size !== 'small' && (
              <div className={styles.ghostText + ' ' + styles.textThree}></div>
            )}
          </div>
          {props.size !== 'small' && (
            <div
              className={
                props.size === 'large'
                  ? styles.pillsWrapperLarge
                  : styles.pillsWrapper
              }
            >
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
