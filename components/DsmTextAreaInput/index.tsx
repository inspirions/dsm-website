import { Textarea } from "@mantine/core";

import { DSM_TEXT_AREA_INPUT } from "@/constants/dataTestId";

import { DsmTextAreaInputPropsType } from "./types";

export const DsmTextAreaInput: React.FC<DsmTextAreaInputPropsType> = ({
  disabled,
  required,
  ...restTextAreaInputProps
}) => (
  <Textarea
    autosize
    minRows={3}
    required={false}
    disabled={disabled}
    withAsterisk={required}
    data-testid={DSM_TEXT_AREA_INPUT}
    {...restTextAreaInputProps}
  />
);
