import { Suspense } from "react";

import { ICON_LIST } from "./CustomIcons";
import { GetSelectedIconPropsType } from "./types";

const GetSelectedIcon = (props: GetSelectedIconPropsType) => {
  const { iconName, ...restProps } = props;
  const IconSelected = ICON_LIST[iconName];
  const ICON_TO_RENDER = IconSelected ? <IconSelected {...restProps} /> : null;
  return <Suspense fallback="">{ICON_TO_RENDER}</Suspense>;
};

export default GetSelectedIcon;
