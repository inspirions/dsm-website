import { TextInput } from "@mantine/core";

import { DSM_TEXT_INPUT } from "@/constants/dataTestId";

import { DsmTextInputPropsType } from "./types";

export const DsmTextInput = ({
  isDisabled,
  isRequired,
  ...inputProps
}: DsmTextInputPropsType) => (
  <TextInput
    required={false}
    disabled={isDisabled}
    withAsterisk={isRequired}
    data-testid={DSM_TEXT_INPUT}
    {...inputProps}
  />
);
