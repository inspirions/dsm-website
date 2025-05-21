import { Avatar } from "@mantine/core";
import { DsmAvatarWithRipplePropsType } from "./types";
import { DsmRippleContainer } from "../DsmRippleContainer";

export const DsmAvatarWithRipple = (props: DsmAvatarWithRipplePropsType) => {
  const { avatarProps, ...restProps } = props;
  return (
    <DsmRippleContainer
      count={5}
      scale={0.3}
      borderColor="var(--mantine-color-dsm-primary-1)"
      {...restProps}
    >
      <Avatar {...avatarProps} />
    </DsmRippleContainer>
  );
};
