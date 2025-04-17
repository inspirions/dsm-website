import { ActionIcon } from "@mantine/core";

import { DSM_ICON_BUTTON } from "@/constants/dataTestId";

import { DsmCustomIcon } from "../DsmCustomIcon";
import { DsmTooltip } from "../DsmTooltip";

import { DsmIconButtonSkeleton } from "./skeleton";
import { DsmIconButtonPropsType } from "./types";

import classes from "./index.module.css";

export const DsmIconButton = (props: DsmIconButtonPropsType) => {
  const {
    tooltipProps = { label: "" },
    skeletonProps = { visible: false },
    iconProps = {},
    ...restProps
  } = props;
  return (
    <DsmIconButtonSkeleton
      data-testid={DSM_ICON_BUTTON.ROOT}
      {...skeletonProps}
    >
      <DsmTooltip {...tooltipProps} data-testid={DSM_ICON_BUTTON.TOOLTIP}>
        <ActionIcon
          size="sm"
          classNames={classes}
          data-testid={DSM_ICON_BUTTON.BUTTON}
          {...restProps}
        >
          <DsmCustomIcon data-testid={DSM_ICON_BUTTON.ICON} {...iconProps} />
        </ActionIcon>
      </DsmTooltip>
    </DsmIconButtonSkeleton>
  );
};
