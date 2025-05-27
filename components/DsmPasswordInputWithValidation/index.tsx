import { useState } from "react";
import { Field, FieldProps } from "formik";

import { PasswordInput, Progress, Text, Popover, Box } from "@mantine/core";

import { DSM_PASSWORD_INPUT_WITH_VALIDATION } from "@/constants/dataTestId";

import { DsmCustomIcon } from "../DsmCustomIcon";

import {
  DsmPasswordInputWithValidationPropsType,
  PasswordRequirementPropsType,
} from "./types";

const PasswordRequirement = ({
  meets,
  label,
}: PasswordRequirementPropsType) => {
  return (
    <Text
      mt={7}
      size="sm"
      component="span"
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.VALIDATION_TEXT}
    >
      {meets ? (
        <DsmCustomIcon
          data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.CHECK_ICON}
        />
      ) : (
        <DsmCustomIcon
          icon="close"
          data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.CLOSE_ICON}
        />
      )}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /.{8,}/, label: "At least 8 characters" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

const getStrength = (password: string) => {
  let multiplier = password.length > 7 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
};

export const DsmPasswordInputWithValidation = (
  props: DsmPasswordInputWithValidationPropsType
) => {
  const { passwordFieldName = "password", inputProps } = props;
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState("");
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  return (
    <Popover
      width="target"
      position="bottom"
      opened={popoverOpened}
      transitionProps={{ transition: "pop" }}
      data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.ROOT}
    >
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <Field name={passwordFieldName}>
            {({ field, meta }: FieldProps) => (
              <PasswordInput
                label="Password"
                placeholder="Enter password"
                withAsterisk
                error={meta.touched && meta.error ? meta.error : ""}
                data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.INPUT}
                {...field}
                onChange={(event) => {
                  field.onChange(event);
                  setValue(event.target.value);
                }}
                {...inputProps}
              />
            )}
          </Field>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress
          mb="xs"
          size={5}
          color={color}
          value={strength}
          data-testid={DSM_PASSWORD_INPUT_WITH_VALIDATION.PROGRESS}
        />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};
