import { Skeleton, SkeletonProps } from "@mantine/core";

import classes from "./index.module.css";

export const DsmIconButtonSkeleton = (props: SkeletonProps) => {
  const { visible = false, width: skeletonWidth = 36, ...restProps } = props;
  return (
    <Skeleton
      className={classes.skeleton}
      visible={visible}
      width={!visible ? "fit-content" : skeletonWidth}
      radius={4}
      {...restProps}
    />
  );
};
