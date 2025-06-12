import { PasswordInputProps } from "@mantine/core";

export interface DsmPasswordInputWithValidationPropsType {
  passwordFieldName?: string;
  inputProps?: PasswordInputProps;
}

export interface PasswordRequirementPropsType {
  meets: boolean;
  label: string;
}
