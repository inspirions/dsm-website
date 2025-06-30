"use client";

import { Field, FieldProps, Form, Formik } from "formik";

import { Stack } from "@mantine/core";

import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmButton } from "@/components/DsmButton";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { FORGOT_PASSWORD_PAGE } from "@/constants/dataTestId";

import {
  FORGOT_PASSWORD_SCHEMA,
  forgotPasswordFormInitialValues,
  ForgotPasswordType,
} from "../../_schema/forgotPassword";
import { ForgotPasswordFormPropsType } from "../../types";

import classes from "./index.module.css";

export const ForgotPasswordForm = ({
  onSubmit,
}: ForgotPasswordFormPropsType) => {
  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: ForgotPasswordType) => {
    formSubmit(onSubmit(submitData));
  };

  return (
    <Formik
      initialValues={forgotPasswordFormInitialValues}
      validationSchema={FORGOT_PASSWORD_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form
        data-testid={FORGOT_PASSWORD_PAGE.FORM}
        className="w-full xl:max-w-[500px]"
      >
        <Stack gap="xs">
          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <DsmTextInput
                isRequired
                className={classes.formInput}
                placeholder="Enter email"
                label="Email"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
              />
            )}
          </Field>
          <DsmButton hideIcon fullWidth type="submit" loading={isSubmitting}>
            Forget Password
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
