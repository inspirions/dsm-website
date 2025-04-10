import { Avatar, Flex, Text } from "@mantine/core";

import { DsmCustomIcon } from "../DsmCustomIcon";

import { DsmInfoAvatarSkeleton } from "./skeleton";
import { DsmInfoAvatarPropsType } from "./types";

import classes from "./index.module.css";

export const DsmInfoAvatar = (props: DsmInfoAvatarPropsType) => {
  const {
    label = "DSM",
    subLabel,
    iconProps,
    labelProps = {},
    avatarProps = {},
    wrapperProps = {},
    skeletonProps = {},
  } = props;
  return skeletonProps?.visible ? (
    <DsmInfoAvatarSkeleton {...skeletonProps} />
  ) : (
    <Flex gap={12} align={"center"} {...wrapperProps}>
      <Avatar
        name={label}
        size={40}
        color="#107969"
        radius={8}
        children={iconProps && <DsmCustomIcon {...iconProps} />}
        {...avatarProps}
      />
      <Flex direction={"column"}>
        <Text className={classes.label} {...labelProps}>
          {label}
        </Text>
        {!!subLabel && <Text className={classes.subLabel}>{subLabel}</Text>}
      </Flex>
    </Flex>
  );
};
