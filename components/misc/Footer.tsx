import React from 'react';
import Button, { IButtonProps } from './Button';
import { useTheme } from '../../contexts/Theme';

export interface IFooterProps {
  leftSide: React.ReactNode;
  rightButton: IButtonProps;
  progress: number | null;
}

const Footer: React.FunctionComponent<IFooterProps> = ({
  leftSide,
  rightButton,
  progress,
}) => {
  const { colors } = useTheme();

  return (
    <>
      <div
        className='progress-bar'
        style={{
          width: `${progress}%`,
          backgroundColor: colors.primary['100'],
        }}
      >
        progress
      </div>
      <div className='left-side'>left part</div>
      <div className='right-side'>
        <Button
          variant={rightButton.variant}
          callback={rightButton.callback}
          text={rightButton.text}
        />
      </div>
    </>
  );
};

export default Footer;
