import { Skeleton, SkeletonProps } from "@mantine/core";

import classes from "./index.module.css";

export const DsmButtonSkeleton = (props: SkeletonProps) => {
  const { visible, width: skeletonWidth = 100, ...restProps } = props;
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
