import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Button.module.scss';

export interface IButtonProps {
  variant: 'primary' | 'secondary';
  callback: () => any;
  text: string;
  disabled?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({ variant, callback, text, disabled }) => {
  const { colors } = useTheme();
  if (variant === 'primary') {
    return (
      <button
        className={styles.primary}
        style={{
          backgroundColor: colors.primary['100'],
          opacity: disabled ? 0.4 : 1,
        }}
        onClick={() => !disabled && callback()}
      >
        <p className="fat">{text}</p>
      </button>
    );
  } else {
    return (
      <button
        className={styles.secondary}
        style={{
          outlineColor: colors.primary['100'],
          color: colors.primary['100'],
          opacity: disabled ? 0.4 : 1,
        }}
        onClick={() => !disabled && callback()}
      >
        <p className="fat">{text}</p>
      </button>
    );
  }
};

export default Button;
