import { ForwardedRef, forwardRef } from "react";

import { Button } from "@mantine/core";

import { DSM_BUTTON } from "@/constants/dataTestId";

import { DsmCustomIcon } from "../DsmCustomIcon";
import { DsmTooltip } from "../DsmTooltip";

import { DsmButtonSkeleton } from "./skeleton";
import { DsmButtonPropsType } from "./types";

import classes from "./index.module.css";

const iconPosition = {
  left: "leftSection",
  right: "rightSection",
};

export const DsmButton = forwardRef(
  (props: DsmButtonPropsType, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      iconProps = {},
      hideIcon = false,
      tooltipProps = { label: "" },
      skeletonProps = { visible: false },
      ...restProps
    } = props;
    const { position = "left", ...restIconProps } = iconProps;
    return (
      <DsmButtonSkeleton
        data-testid={DSM_BUTTON.ROOT}
        {...{ w: "inherit", ...skeletonProps }}
      >
        <DsmTooltip data-testid={DSM_BUTTON.TOOLTIP} {...tooltipProps}>
          <Button
            size="sm"
            ref={ref}
            data-testid={DSM_BUTTON.BUTTON}
            {...(!hideIcon && {
              [iconPosition[position]]: (
                <DsmCustomIcon
                  size={20}
                  data-testid={DSM_BUTTON.ICON}
                  style={{
                    width: "var(--button-fz)",
                    height: "var(--button-fz)",
                  }}
                  {...restIconProps}
                />
              ),
            })}
            classNames={{
              root: classes.root,
              inner: classes.inner,
              section: classes.section,
            }}
            {...restProps}
          >
            {children}
          </Button>
        </DsmTooltip>
      </DsmButtonSkeleton>
    );
  }
);
