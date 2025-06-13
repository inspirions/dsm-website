import { TextProps } from "@mantine/core";

export interface DsmTitleTextPropsType extends TextProps {
  text: string;
  wrapperStyleProps?: React.HTMLAttributes<HTMLDivElement>;
}
