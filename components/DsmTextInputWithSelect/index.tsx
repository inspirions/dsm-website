import { useMemo } from "react";

import { Divider, Flex, Select, TextInput } from "@mantine/core";

import { DSM_TEXT_INPUT_WITH_SELECT } from "@/constants/dataTestId";

import { DsmTextInputWithSelectPropsType } from "./types";

import classes from "./index.module.css";

export const DsmTextInputWithSelect = ({
  isDisabled,
  isRequired,
  selectProps,
  ...restInputProps
}: DsmTextInputWithSelectPropsType) => {
  const select = useMemo(
    () => (
      <Select
        variant="unstyled"
        disabled={isDisabled}
        data-testid={DSM_TEXT_INPUT_WITH_SELECT.SELECT}
        {...selectProps}
        classNames={{ input: classes.selectInput }}
      />
    ),
    [selectProps]
  );

  return (
    <TextInput
      variant="unstyled"
      disabled={isDisabled}
      withAsterisk={isRequired}
      data-testid={DSM_TEXT_INPUT_WITH_SELECT.ROOT}
      {...restInputProps}
      className={classes.wrapper}
      classNames={{ input: classes.input, wrapper: classes.inputWrapper }}
      inputContainer={(children) => (
        <Flex>
          {children}
          <Divider orientation="vertical" />
          {select}
        </Flex>
      )}
    />
  );
};
