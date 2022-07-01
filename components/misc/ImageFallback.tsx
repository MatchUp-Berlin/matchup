import Image, { ImageProps } from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';

const ImageFallback: React.FunctionComponent<ImageProps & { fallbackSrc: string }> = ({
  src,
  fallbackSrc,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // broken image
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => setImgSrc(fallbackSrc)}
    ></Image>
  );
};

export default ImageFallback;
