import React from 'react';
import Image from 'next/image';
import styles from './styles/RatingBall.module.scss';
import getSportIcon from '../../utils/getSportIcon';
import { TSportCategories } from '../../utils/types/MatchUp.Type';

export interface IRatingBallProps {
  ballCategory: TSportCategories;
  // value: number;
  // callback: () => any;
}

const RatingBall: React.FunctionComponent<IRatingBallProps> = ({
  ballCategory,
  // value,
  // callback,
}) => {
  return (
    <div className={styles.ratingBall}>
      <Image
        src={getSportIcon(ballCategory)}
        alt='image not found'
        width={30}
        height={30}
        layout='intrinsic'
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default RatingBall;
