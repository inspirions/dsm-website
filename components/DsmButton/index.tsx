import { ForwardedRef, forwardRef } from "react";

import { Button } from "@mantine/core";

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
      <DsmButtonSkeleton {...{ w: "inherit", ...skeletonProps }}>
        <DsmTooltip {...tooltipProps}>
          <Button
            size="sm"
            ref={ref}
            {...(!hideIcon && {
              [iconPosition[position]]: (
                <DsmCustomIcon
                  size={20}
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
