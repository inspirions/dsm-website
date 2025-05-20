import React from "react";

import { ImageProps } from "@mantine/core";

/**
 * Props for the DsmImage component
 * Combines HTML image attributes (excluding 'src' and 'style') with Mantine ImageProps
 */
export type DsmImagePropsType = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "style"
> &
  ImageProps;
