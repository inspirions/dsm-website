import { MouseEventHandler } from "react";

import { ActionIconProps, SkeletonProps, TooltipProps } from "@mantine/core";

import { DsmCustomIconPropsType } from "../DsmCustomIcon";

export interface DsmIconButtonPropsType extends ActionIconProps {
  skeletonProps?: SkeletonProps;
  iconProps?: DsmCustomIconPropsType;
  tooltipProps?: Partial<TooltipProps>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
