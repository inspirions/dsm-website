import { Image } from "@mantine/core";

import { FALLBACK_IMAGE_URL } from "@/constants/commons";
import { DSM_IMAGE } from "@/constants/dataTestId";

import { DsmImagePropsType } from "./types";

export function DsmImage(props: DsmImagePropsType) {
  const { alt = "DsmImage", ...restProps } = props;
  return (
    <Image
      alt={alt}
      data-testid={DSM_IMAGE}
      {...restProps}
      fallbackSrc={FALLBACK_IMAGE_URL}
    />
  );
}

export default DsmImage;
