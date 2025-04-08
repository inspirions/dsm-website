"use client";

import React, { useState } from "react";
import { Field, FieldInputProps, FieldProps, Form, Formik } from "formik";

import { Stack, PasswordInput, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmPasswordInputWithValidation } from "@/components/DsmPasswordInputWithValidation";

import {
  REGISTER_SCHEMA,
  RegisterType,
  registerFormInitialValues,
} from "../../_schema/signUp";

interface LoginFormPropsType {
  onSubmit: (payload: RegisterType) => Promise<void>;
}

export const SignUpForm = ({ onSubmit }: LoginFormPropsType) => {
  const [registerError, setRegisterError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (submitData: RegisterType) => {
    setIsSubmitting(true);
    const { name } = submitData;
    const nameArr = name.trim().split(/\s+/);

    const payload = {
      ...submitData,
      firstName: nameArr[0] || "",
      middleName: nameArr.length > 2 ? nameArr.slice(1, -1).join(" ") : "",
      lastName: nameArr.length > 1 ? nameArr[nameArr.length - 1] : "",
    };

    onSubmit(payload).finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange =
    (field: FieldInputProps<RegisterType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value } });
      !!registerError && setRegisterError("");
    };

  return (
    <Formik
      initialValues={registerFormInitialValues}
      validationSchema={REGISTER_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stack gap="lg">
          <Field name="name">
            {({ field, meta }: FieldProps) => (
              <DsmTextInput
                isRequired
                placeholder="Enter Name"
                label="Name"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
                value={field.value}
                onChange={handleChange(field)}
              />
            )}
          </Field>

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
          <DsmPasswordInputWithValidation />
          <Field name="confirmPassword">
            {({ field, meta }: FieldProps) => (
              <PasswordInput
                withAsterisk
                label="Confirm Password"
                placeholder="Confirm password"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
                value={field.value}
                onChange={handleChange(field)}
              />
            )}
          </Field>

          {registerError && (
            <Text c="red" size="md" pt={10} fw={600}>
              {registerError}
            </Text>
          )}

          <DsmButton
            hideIcon
            fullWidth
            bg="blue"
            type="submit"
            loading={isSubmitting}
          >
            Sign up
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
