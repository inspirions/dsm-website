import Image from "next/image";

import { DSM_IMAGE } from "@/constants/dataTestId";

import { DsmImagePropsType } from "./types";

export function DsmImage(props: DsmImagePropsType) {
  const { alt = "DsmImage", ...restProps } = props;
  return <Image alt={alt} data-testid={DSM_IMAGE} {...restProps} />;
}

export default DsmImage;
