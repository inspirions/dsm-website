"use client";

import { useState } from "react";
import { Formik, Form, Field, FieldProps, FieldInputProps } from "formik";

import {
  Anchor,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
} from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTextInput } from "@/components/DsmTextInput";

import {
  LOGIN_SCHEMA,
  loginFormInitialValues,
  LoginType,
} from "../../_schema/login";

interface LoginFormPropsType {
  onSubmit: (payload: LoginType) => Promise<void>;
}

export const LoginForm = ({ onSubmit }: LoginFormPropsType) => {
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (submitData: LoginType) => {
    setIsSubmitting(true);
    onSubmit(submitData).finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange =
    (field: FieldInputProps<LoginType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value } });
      !!loginError && setLoginError("");
    };

  return (
    <Formik
      initialValues={loginFormInitialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stack gap="lg">
          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <DsmTextInput
                isRequired
                placeholder="Enter email"
                label="Email"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
                value={field.value}
                onChange={handleChange(field)}
              />
            )}
          </Field>

          <Field name="password">
            {({ field, meta }: FieldProps) => (
              <PasswordInput
                withAsterisk
                label="Password"
                placeholder="Enter password"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
                value={field.value}
                onChange={handleChange(field)}
              />
            )}
          </Field>
          {loginError && (
            <Text c="red" size="md" pt={10} fw={600}>
              {loginError}
            </Text>
          )}
          <Group justify="space-between">
            <Checkbox label="Remember me" radius={"sm"} />
            <Anchor c="blue">Forgot Password</Anchor>
          </Group>
          <DsmButton
            hideIcon
            fullWidth
            bg="blue"
            type="submit"
            loading={isSubmitting}
          >
            Sign in
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
