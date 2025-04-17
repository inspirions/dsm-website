import { Tooltip, TooltipProps } from "@mantine/core";

import { DSM_TOOLTIP } from "@/constants/dataTestId";

export const DsmTooltip = (props: Partial<TooltipProps>) => {
  const { label = "", children, ...restProps } = props;
  return (
    <Tooltip
      label={label}
      withArrow
      arrowSize={8}
      disabled={!props?.label}
      data-testid={DSM_TOOLTIP}
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};
