import { useState } from "react";
import { Field, FieldProps } from "formik";

import { PasswordInput, Progress, Text, Popover, Box } from "@mantine/core";

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
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      component="span"
      size="sm"
    >
      {meets ? <DsmCustomIcon /> : <DsmCustomIcon icon="close" />}
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
  const { passwordFieldName = "password" } = props;
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
      opened={popoverOpened}
      position="bottom"
      width="target"
      transitionProps={{ transition: "pop" }}
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
                {...field}
                onChange={(event) => {
                  field.onChange(event);
                  setValue(event.target.value);
                }}
              />
            )}
          </Field>
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
};
