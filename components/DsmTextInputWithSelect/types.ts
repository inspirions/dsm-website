import { SelectProps, TextInputProps } from "@mantine/core";

export interface DsmTextInputWithSelectPropsType extends TextInputProps {
  isDisabled?: boolean;
  isRequired?: boolean;
  selectProps?: SelectProps;
}
