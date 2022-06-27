import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Skills.Card.module.scss';

export interface ISkillsCardProps {
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

const SkillsCard: React.FunctionComponent<ISkillsCardProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <p>SKILL LEVEL</p>
      <div className={styles.pill} style={{ backgroundColor: colors.primary[100] }}>
        <p className="fat">{props.skillLevel}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
