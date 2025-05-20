import { SelectProps, TextInputProps } from "@mantine/core";

export interface DsmTextInputWithSelectPropsType extends TextInputProps {
  helperText?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  selectProps?: SelectProps;
}
