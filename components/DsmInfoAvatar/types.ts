import { AvatarProps, FlexProps, SkeletonProps } from '@mantine/core';

import { DsmCustomIconPropsType } from '../DsmCustomIcon';

export interface DsmInfoAvatarSkeletonPropsType extends SkeletonProps {
  wrapperProps?: FlexProps;
  textWrapperProps?: FlexProps;
  avatarSkeletonProps?: SkeletonProps;
}

export interface DsmInfoAvatarPropsType {
  label: string;
  subLabel?: string;
  wrapperProps?: FlexProps;
  avatarProps?: AvatarProps;
  iconProps?: DsmCustomIconPropsType;
  skeletonProps?: DsmInfoAvatarSkeletonPropsType;
}
