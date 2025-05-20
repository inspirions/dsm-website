import { BoxProps, OverlayProps } from "@mantine/core";

import { DsmImageProps } from "../DsmImage/types";

export type FileActionType = (src: string) => () => void;

export interface DsmImageWithOverlayPropsType {
  imgIndex: number;
  overlayChildren: React.ReactNode;
  wrapperProps?: BoxProps;
  imageProps?: DsmImageProps;
  overlayProps?: OverlayProps;
}
