import { Image } from "@mantine/core";

import { LOGO_URL } from "@/constants/commons";

import { DsmImageProps } from "./types";

export function DsmImage(props: DsmImageProps) {
  const { imageUrl, imageAlt, ...restProps } = props;
  return (
    <Image
      src={imageUrl}
      alt={imageAlt ? imageAlt : "DsmImage"}
      {...restProps}
      fallbackSrc={LOGO_URL}
    />
  );
}

export default DsmImage;
