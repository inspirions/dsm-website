import React from 'react';

import { Box, Stack, lighten } from '@mantine/core';

import { DsmRippleContainerPropsType } from './types';

import classes from './index.module.css';

export const DsmRippleContainer: React.FC<DsmRippleContainerPropsType> = ({
  count = 4,
  size = 80,
  scale = 0.85,
  borderColor = 'var(--mantine-color-gray-2)',
  innerColor = '',
  children,
}) => {
  const NO_OF_CIRCLES = Math.min(Math.max(count, 1), 10);

  const circles = Array.from({ length: NO_OF_CIRCLES }, (_, index) => {
    // factor goes from 0 (innermost) → 1 (outermost)
    const factor = NO_OF_CIRCLES > 1 ? index / (NO_OF_CIRCLES * 1.25 - 1) : 0;
    // interpolate size scale
    const diameter = size * scale * (index + 1);
    // progressively lighten the border color
    const stroke = lighten(borderColor, factor);

    return (
      <Stack
        key={index}
        style={{
          width: diameter,
          height: diameter,
          border: `1px solid ${stroke}`,
          backgroundColor: !index ? innerColor : undefined,
        }}
        className={classes.circle}
      ></Stack>
    );
  });

  return (
    <Box w={size} h={size} className={classes.parent}>
      {circles}
      {children}
    </Box>
  );
};
