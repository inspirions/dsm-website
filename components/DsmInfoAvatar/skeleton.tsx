import { Flex, Skeleton } from "@mantine/core";

import { DsmInfoAvatarSkeletonPropsType } from "./types";

export const DsmInfoAvatarSkeleton = (
  props: DsmInfoAvatarSkeletonPropsType
) => {
  const {
    wrapperProps = {},
    avatarSkeletonProps = {},
    textWrapperProps = {},
    ...restProps
  } = props;
  return (
    <Flex gap={12} align="center" {...wrapperProps}>
      <Skeleton height={40} width={40} radius={8} {...avatarSkeletonProps} />
      <Flex direction="column" gap={8} {...textWrapperProps}>
        <Skeleton height={16} width={120} radius={2} {...restProps} />
        <Skeleton height={16} width={120} radius={2} {...restProps} />
      </Flex>
    </Flex>
  );
};
