import React from 'react';
import { useTheme } from '../../contexts/Theme';
import ImageFallback from './ImageFallback';
import getDefaultImage from '../../utils/getDefaultImage';
import defaultAvatar from '../../public/default-avatar.png';

export interface IAvatarProps {
  size: string;
  image: any;
  attended?: boolean;
  highlightable?: boolean;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  size,
  image,
  attended,
  highlightable,
}) => {
  const { colors, shadows } = useTheme();
  let avatarSize: string = '';

  const border =
    highlightable && attended ? `3px solid ${colors.primary[100]}` : 'None';

  if (size === 'small') {
    avatarSize = '50px';
  }
  if (size === 'medium') {
    avatarSize = '75px';
  }
  if (size === 'large') {
    avatarSize = '150px';
  }

  return (
    <div
      style={{
        borderRadius: '50%',
        boxShadow: size === 'large' ? shadows.large : '',
        width: avatarSize,
        height: avatarSize,
        overflow: 'hidden',
        border: border,
      }}
    >
      <ImageFallback
        src={image}
        fallbackSrc={defaultAvatar.src}
        layout='responsive'
        objectFit='cover'
        width={avatarSize}
        height={avatarSize}
        alt='personally I would have replaced missing images with some Max-s mothers picture, but you now...pc people and stuff'
      />
    </div>
  );
};

export default Avatar;
