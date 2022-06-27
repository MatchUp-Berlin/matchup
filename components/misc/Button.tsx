import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Button.module.scss';

export interface IButtonProps {
  variant: 'primary' | 'secondary';
  callback: () => any;
  text: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  variant,
  callback,
  text,
}) => {
  const { colors } = useTheme();
  if (variant === 'primary') {
    return (
      <button
        style={{ backgroundColor: colors.primary['100'] }}
        onClick={callback}
      >
        {text}
      </button>
    );
  } else {
    return (
      <button
        className='secondary'
        style={{ borderColor: colors.primary['100'] }}
        onClick={callback}
      >
        {text}
      </button>
    );
  }
};

export default Button;
