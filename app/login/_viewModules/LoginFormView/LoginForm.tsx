"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
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

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { LOGIN_PAGE } from "@/constants/dataTestId";
import { routes } from "@/constants/routeConstants";

import classes from "./index.module.css";

import {
  LOGIN_SCHEMA,
  loginFormInitialValues,
  LoginType,
} from "../../_schema/login";

import { LoginFormPropsType } from "../../types";

const { FORGOT_PASSWORD } = routes;

export const LoginForm = ({ onSubmit }: LoginFormPropsType) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [loginError, setLoginError] = useState("");
  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: LoginType) => {
    formSubmit(onSubmit(submitData));
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
      initialValues={{
        ...loginFormInitialValues,
        ...(email && { email }),
      }}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form data-testid={LOGIN_PAGE.FORM}>
        <Stack gap="lg">
          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <DsmTextInput
                className={classes.formInput}
                isRequired
                label="Email"
                readOnly={!!email}
                placeholder="Enter email"
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
                className={classes.formInput}
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
            <Checkbox
              className={classes.formInput}
              label="Remember me"
              radius={"sm"}
            />
            <Anchor href={FORGOT_PASSWORD}>Forgot Password</Anchor>
          </Group>
          <DsmButton hideIcon fullWidth type="submit" loading={isSubmitting}>
            Sign in
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
