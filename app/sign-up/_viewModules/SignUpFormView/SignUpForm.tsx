"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Field, FieldInputProps, FieldProps, Form, Formik } from "formik";

import { Stack, PasswordInput, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmPasswordInputWithValidation } from "@/components/DsmPasswordInputWithValidation";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { SIGN_UP_PAGE } from "@/constants/dataTestId";

import {
  REGISTER_SCHEMA,
  RegisterType,
  registerFormInitialValues,
} from "../../_schema/signUp";

import { SignUpFormPropsType } from "../../types";
import classes from "./index.module.css";

export const SignUpForm = ({ onSubmit }: SignUpFormPropsType) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [registerError, setRegisterError] = useState("");
  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: RegisterType) => {
    const { name } = submitData;
    const nameArr = name.trim().split(/\s+/);

    const payload = {
      ...submitData,
      firstName: nameArr[0] || "",
      middleName: nameArr.length > 2 ? nameArr.slice(1, -1).join(" ") : "",
      lastName: nameArr.length > 1 ? nameArr[nameArr.length - 1] : "",
    };

    formSubmit(onSubmit(payload));
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
      initialValues={{
        ...registerFormInitialValues,
        ...(email && { email }),
      }}
      validationSchema={REGISTER_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form data-testid={SIGN_UP_PAGE.FORM} className="w-full xl:max-w-[500px]">
        <Stack gap="lg">
          <Field name="name">
            {({ field, meta }: FieldProps) => (
              <DsmTextInput
                isRequired
                className={classes.formInput}
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
                className={classes.formInput}
                label="Email"
                placeholder="Enter email"
                readOnly={!!email}
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
                value={field.value}
                onChange={handleChange(field)}
              />
            )}
          </Field>
          <DsmPasswordInputWithValidation
            inputProps={{
              styles: {
                input: {
                  color: "#fff",
                  backgroundColor: "#333",
                },
              },
            }}
          />
          <Field name="confirmPassword">
            {({ field, meta }: FieldProps) => (
              <PasswordInput
                withAsterisk
                className={classes.formInput}
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

          <DsmButton hideIcon fullWidth type="submit" loading={isSubmitting}>
            Sign up
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
