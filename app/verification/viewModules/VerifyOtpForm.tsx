"use client";

import { useState } from "react";
import { Field, FieldProps, Form, Formik } from "formik";

import { Center, PinInput, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { OtpTimer } from "./OtpTimer";

import {
  OTP_VERIFICATION_SCHEMA,
  otpVerificationFormInitialValues,
  OtpVerificationType,
} from "../schema/verifyOtp";

export const VerifyOtpForm = () => {
  const [responseError, setResponseError] = useState("");

  const handleSubmit = (submitData: OtpVerificationType) => {
    console.log(submitData);
  };

  return (
    <Formik
      initialValues={otpVerificationFormInitialValues}
      validationSchema={OTP_VERIFICATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <Center my={20}>
            <Field name="otp">
              {({ field }: FieldProps) => (
                <PinInput
                  size="md"
                  length={6}
                  type="number"
                  placeholder="-"
                  value={field.value}
                  onChange={(value) => {
                    setFieldValue("otp", value);
                  }}
                />
              )}
            </Field>
          </Center>
          <Center mb={10}>
            <OtpTimer />
          </Center>
          {responseError && (
            <Text c="red" size="md" pt={10} fw={600}>
              {responseError}
            </Text>
          )}
          <DsmButton hideIcon fullWidth bg="blue" type="submit">
            Verify
          </DsmButton>
        </Form>
      )}
    </Formik>
  );
};
