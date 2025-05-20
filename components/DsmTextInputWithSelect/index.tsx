import { useMemo } from "react";

import { Divider, Flex, Select, Stack, Text, TextInput } from "@mantine/core";

import { DSM_TEXT_INPUT_WITH_SELECT } from "@/constants/dataTestId";

import { DsmTextInputWithSelectPropsType } from "./types";

import classes from "./index.module.css";

export const DsmTextInputWithSelect = ({
  isDisabled,
  isRequired,
  selectProps,
  helperText,
  ...restInputProps
}: DsmTextInputWithSelectPropsType) => {
  const select = useMemo(
    () => (
      <Select
        color="blue"
        variant="unstyled"
        checkIconPosition="right"
        disabled={isDisabled}
        data-testid={DSM_TEXT_INPUT_WITH_SELECT.SELECT}
        comboboxProps={{ shadow: "md" }}
        {...selectProps}
        classNames={{
          input: classes.selectInput,
          option: classes.selectOption,
          options: classes.selectOptions,
        }}
      />
    ),
    [isDisabled, selectProps]
  );

  return (
    <Stack style={{ gap: 2 }}>
      <TextInput
        variant="unstyled"
        disabled={isDisabled}
        withAsterisk={isRequired}
        data-testid={DSM_TEXT_INPUT_WITH_SELECT.ROOT}
        {...restInputProps}
        classNames={{
          input: classes.input,
          wrapper: classes.wrapper,
          root: classes.root,
        }}
        inputContainer={(children) => (
          <Flex>
            {children}
            <Divider orientation="vertical" />
            {select}
          </Flex>
        )}
      />
      {!!helperText && <Text className={classes.helperText}>{helperText}</Text>}
    </Stack>
  );
};
