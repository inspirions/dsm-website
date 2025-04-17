"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Field, FieldInputProps, FieldProps, Form, Formik } from "formik";

import { Center, PinInput, Stack, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { VERIFICATION_PAGE } from "@/constants/dataTestId";

import { OtpTimer } from "./OtpTimer";

import {
  OTP_VERIFICATION_SCHEMA,
  otpVerificationFormInitialValues,
  OtpVerificationType,
} from "../../_schema/verifyOtp";

import { VerifyOtpFormPropsType } from "../../types";

const PIN_LENGTH = 6;

export const VerifyOtpForm = ({
  onSubmit,
  onResend,
}: VerifyOtpFormPropsType) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [responseError, setResponseError] = useState("");
  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: OtpVerificationType) => {
    const payload = { ...submitData, email };
    formSubmit(onSubmit(payload));
  };

  const handleChange =
    (field: FieldInputProps<OtpVerificationType>) => (value: string) => {
      field.onChange({ target: { name: field.name, value } });
      !!responseError && setResponseError("");
    };

  if (!email) {
    return (
      <Text c="red" size="md" ta="center">
        Email not found
      </Text>
    );
  }

  return (
    <Formik
      initialValues={otpVerificationFormInitialValues}
      validationSchema={OTP_VERIFICATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form data-testid={VERIFICATION_PAGE.FORM}>
          <Stack gap="md">
            <Center>
              <Field name="otp">
                {({ field }: FieldProps) => (
                  <PinInput
                    size="md"
                    type="number"
                    placeholder="-"
                    length={PIN_LENGTH}
                    value={field.value}
                    onChange={handleChange(field)}
                  />
                )}
              </Field>
            </Center>
            <Center>
              <OtpTimer email={email} onResend={onResend} />
            </Center>
            {responseError && (
              <Text c="red" size="md" ta="center">
                {responseError}
              </Text>
            )}
            <DsmButton
              hideIcon
              fullWidth
              color="blue"
              type="submit"
              loading={isSubmitting}
              disabled={values.otp.length !== PIN_LENGTH}
            >
              Verify
            </DsmButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
