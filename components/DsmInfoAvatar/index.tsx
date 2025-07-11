import { Avatar, Flex, Text } from "@mantine/core";

import { DsmCustomIcon } from "../DsmCustomIcon";

import { DsmInfoAvatarSkeleton } from "./skeleton";
import { DsmInfoAvatarPropsType } from "./types";

import classes from "./index.module.css";
import { DSM_INFO_AVATAR } from "@/constants/dataTestId";

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
    <DsmInfoAvatarSkeleton
      data-testid={DSM_INFO_AVATAR.ROOT}
      {...skeletonProps}
    />
  ) : (
    <Flex
      gap={12}
      align="center"
      data-testid={DSM_INFO_AVATAR.ROOT}
      {...wrapperProps}
    >
      <Avatar
        name={label}
        size={40}
        color="#107969"
        radius={8}
        data-testid={DSM_INFO_AVATAR.AVATAR}
        {...avatarProps}
      >
        {iconProps && <DsmCustomIcon {...iconProps} />}
      </Avatar>
      <Flex direction="column">
        <Text
          className={classes.label}
          data-testid={DSM_INFO_AVATAR.LABEL}
          {...labelProps}
        >
          {label}
        </Text>
        {!!subLabel && (
          <Text
            className={classes.subLabel}
            data-testid={DSM_INFO_AVATAR.SUB_LABEL}
          >
            {subLabel}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
