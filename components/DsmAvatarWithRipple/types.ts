import { AvatarProps } from "@mantine/core";
import { DsmRippleContainerPropsType } from "../DsmRippleContainer/types";

export interface DsmAvatarWithRipplePropsType
  extends DsmRippleContainerPropsType {
  avatarProps: AvatarProps;
}

export interface RecursiveRippleBoxPropsType {
  layers: number;
  padding: string | number;
  children: React.ReactNode;
}
