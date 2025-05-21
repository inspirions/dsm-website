import { BoxProps, OverlayProps } from "@mantine/core";

import { DsmImagePropsType } from "../DsmImage/types";

export type FileActionType = (src: string) => () => void;

export interface DsmImageWithOverlayPropsType {
  imgIndex: number;
  overlayChildren: React.ReactNode;
  wrapperProps?: BoxProps;
  imageProps?: DsmImagePropsType;
  overlayProps?: OverlayProps;
}
