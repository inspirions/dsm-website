import { DSM_CUSTOM_ICON } from "@/constants/dataTestId";

import GetSelectedIcon from "./getSelectedIcon";
import { CustomIconPropsType, IconNameType } from "./types";

export interface DsmCustomIconPropsType extends CustomIconPropsType {
  icon?: IconNameType;
  position?: "left" | "right";
}

export const DsmCustomIcon = (props: DsmCustomIconPropsType) => {
  const { icon = "tick", ...restIconProps } = props;

  return (
    <GetSelectedIcon
      iconName={icon}
      data-testid={DSM_CUSTOM_ICON}
      {...restIconProps}
    />
  );
};
