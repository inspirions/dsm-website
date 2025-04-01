import { ActionIcon } from '@mantine/core';

import { DsmCustomIcon } from '../DsmCustomIcon';
import { DsmTooltip } from '../DsmTooltip';

import { DsmIconButtonSkeleton } from './skeleton';
import { DsmIconButtonPropsType } from './types';

import classes from './index.module.css';

export const DsmIconButton = (props: DsmIconButtonPropsType) => {
  const {
    tooltipProps = { label: '' },
    skeletonProps = { visible: false },
    iconProps = {},
    ...restProps
  } = props;
  return (
    <DsmIconButtonSkeleton {...skeletonProps}>
      <DsmTooltip {...tooltipProps}>
        <ActionIcon size="sm" classNames={classes} {...restProps}>
          <DsmCustomIcon {...iconProps} />
        </ActionIcon>
      </DsmTooltip>
    </DsmIconButtonSkeleton>
  );
};
