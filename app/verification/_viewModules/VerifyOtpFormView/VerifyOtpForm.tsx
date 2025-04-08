"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Field, FieldInputProps, FieldProps, Form, Formik } from "formik";

import { Center, PinInput, Stack, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { OtpTimer } from "./OtpTimer";

import {
  OTP_VERIFICATION_SCHEMA,
  otpVerificationFormInitialValues,
  OtpVerificationType,
} from "../../_schema/verifyOtp";

interface VerifyOtpFormPropsType {
  onResend: (payload: string) => Promise<void>;
  onSubmit: (payload: OtpVerificationType) => Promise<void>;
}

const PIN_LENGTH = 6;

export const VerifyOtpForm = ({
  onSubmit,
  onResend,
}: VerifyOtpFormPropsType) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [responseError, setResponseError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (submitData: OtpVerificationType) => {
    if (!email) {
      setResponseError("Email not found");
      return;
    }
    setIsSubmitting(true);
    const payload = {
      ...submitData,
      email,
    };
    onSubmit(payload).finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange =
    (field: FieldInputProps<OtpVerificationType>) => (value: string) => {
      field.onChange({ target: { name: field.name, value } });
      !!responseError && setResponseError("");
    };

  return (
    <Formik
      initialValues={otpVerificationFormInitialValues}
      validationSchema={OTP_VERIFICATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
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
