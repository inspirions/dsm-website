import { Image } from '@mantine/core';

import { DsmImageProps } from './types';

export function DsmImage(props: DsmImageProps) {
  const { imageUrl, imageAlt, ...restProps } = props;
  return (
    <Image
      src={imageUrl}
      alt={imageAlt ? imageAlt : 'DsmImage'}
      {...restProps}
      fallbackSrc="https://inspiringlab.com.np/wp-content/uploads/2023/05/I_logo150.png"
    />
  );
}

export default DsmImage;
