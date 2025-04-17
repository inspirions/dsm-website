import { Image } from "@mantine/core";

import { LOGO_URL } from "@/constants/commons";
import { DSM_IMAGE } from "@/constants/dataTestId";

import { DsmImageProps } from "./types";

export function DsmImage(props: DsmImageProps) {
  const { imageUrl, imageAlt, ...restProps } = props;
  return (
    <Image
      src={imageUrl}
      alt={imageAlt ? imageAlt : "DsmImage"}
      data-testid={DSM_IMAGE}
      {...restProps}
      fallbackSrc={LOGO_URL}
    />
  );
}

export default DsmImage;
