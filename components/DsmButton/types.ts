import { MouseEventHandler } from 'react';

import { ButtonProps, SkeletonProps, TooltipProps } from '@mantine/core';

import { DsmCustomIconPropsType } from '../DsmCustomIcon';

export interface DsmButtonPropsType extends ButtonProps {
  hideIcon?: boolean;
  skeletonProps?: SkeletonProps;
  iconProps?: DsmCustomIconPropsType;
  type?: 'submit' | 'reset' | 'button';
  tooltipProps?: Partial<TooltipProps>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
