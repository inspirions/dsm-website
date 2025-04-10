import {
  AvatarProps,
  FlexProps,
  SkeletonProps,
  TextProps,
} from "@mantine/core";

import { DsmCustomIconPropsType } from "../DsmCustomIcon";

export interface DsmInfoAvatarSkeletonPropsType extends SkeletonProps {
  wrapperProps?: FlexProps;
  textWrapperProps?: FlexProps;
  avatarSkeletonProps?: SkeletonProps;
}

export interface DsmInfoAvatarPropsType {
  label: string;
  subLabel?: string;
  labelProps?: TextProps;
  wrapperProps?: FlexProps;
  avatarProps?: AvatarProps;
  iconProps?: DsmCustomIconPropsType;
  skeletonProps?: DsmInfoAvatarSkeletonPropsType;
}
