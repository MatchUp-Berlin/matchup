import React from 'react';
import { useTheme } from '../../contexts/Theme';
import Image from 'next/image';

export interface IAvatarProps {
  size: string;
  image: any;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({ size, image }) => {
  const { shadows } = useTheme();
  let avatarSize: string = '';

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
      }}
    >
      <Image
        src={image}
        layout="responsive"
        objectFit="cover"
        width={avatarSize}
        height={avatarSize}
        alt="personally I would have replaced missing images with some Max-s mothers picture, but you now...pc people and stuff"
      />
    </div>
  );
};

export default Avatar;
