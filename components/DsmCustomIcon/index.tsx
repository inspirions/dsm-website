import { useMemo } from "react";

import GetSelectedIcon from "./getSelectedIcon";
import { CustomIconPropsType, IconNameType } from "./types";

export interface DsmCustomIconPropsType extends CustomIconPropsType {
  icon?: IconNameType;
  position?: "left" | "right";
}

export const DsmCustomIcon = (props: DsmCustomIconPropsType) => {
  const { icon = "tick", ...restIconProps } = props;

  const RENDER_ICON = useMemo(
    () => <GetSelectedIcon iconName={icon} {...restIconProps} />,
    [icon, restIconProps]
  );

  return RENDER_ICON;
};
