import { Image } from "@mantine/core";

import { LOGO_URL } from "@/constants/commons";
import { DSM_IMAGE } from "@/constants/dataTestId";

import { DsmImagePropsType } from "./types";

export function DsmImage(props: DsmImagePropsType) {
  const { alt = "DsmImage", ...restProps } = props;
  return (
    <Image
      alt={alt}
      data-testid={DSM_IMAGE}
      {...restProps}
      fallbackSrc={LOGO_URL}
    />
  );
}

export default DsmImage;
