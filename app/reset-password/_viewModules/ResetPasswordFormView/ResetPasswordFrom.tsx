"use client";

import { useSearchParams } from "next/navigation";

import { Field, FieldProps, Form, Formik } from "formik";

import { PasswordInput, Stack } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmPasswordInputWithValidation } from "@/components/DsmPasswordInputWithValidation";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { RESET_PASSWORD_PAGE } from "@/constants/dataTestId";

import {
  RESET_PASSWORD_SCHEMA,
  ResetPasswordType,
  resetPasswordFormInitialValues,
} from "../../_schema/resetPassword";
import { ResetPasswordFormPropsType } from "../../types";

export const ResetPasswordFrom = ({ onSubmit }: ResetPasswordFormPropsType) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: ResetPasswordType) => {
    const payload = { ...submitData, email };
    formSubmit(onSubmit(payload));
  };

  return (
    <Formik
      initialValues={resetPasswordFormInitialValues}
      validationSchema={RESET_PASSWORD_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form data-testid={RESET_PASSWORD_PAGE.FORM}>
        <Stack gap="xs">
          <DsmPasswordInputWithValidation />
          <Field name="confirmPassword">
            {({ field, meta }: FieldProps) => (
              <PasswordInput
                withAsterisk
                label="Confirm Password"
                placeholder="Confirm password"
                error={meta.error && meta.touched ? meta.error : ""}
                {...field}
              />
            )}
          </Field>
          <DsmButton
            hideIcon
            fullWidth
            bg="blue"
            type="submit"
            loading={isSubmitting}
          >
            Submit
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
