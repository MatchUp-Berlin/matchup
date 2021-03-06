import React from 'react';
import { useTheme } from '../../contexts/Theme';
import ImageFallback from './ImageFallback';
import defaultAvatar from '../../public/default-avatar.png';

export interface IAvatarProps {
  size: string;
  image: any;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({ size, image }) => {
  const { colors, shadows } = useTheme();
  let avatarSize: string = '';

  if (size === 'small') {
    avatarSize = '50px';
  }
  if (size === 'medium') {
    avatarSize = '75px';
  }
  if (size === 'large') {
    avatarSize = '200px';
  }

  return (
    <div
      style={{
        borderRadius: '50%',
        boxShadow: size === 'large' ? shadows.large : '',
        width: avatarSize,
        height: avatarSize,
        overflow: 'hidden',
      }}
    >
      <ImageFallback
        src={image}
        fallbackSrc={defaultAvatar.src}
        layout='responsive'
        objectFit='cover'
        width={avatarSize}
        height={avatarSize}
        priority={true}
        alt='personally I would have replaced missing images with some Max-s mothers picture, but you now...pc people and stuff'
      />
    </div>
  );
};

export default Avatar;
