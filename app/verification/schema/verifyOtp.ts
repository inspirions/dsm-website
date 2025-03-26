import * as Yup from "yup";

export const OTP_VERIFICATION_SCHEMA = Yup.object().shape({
  otp: Yup.string().required("OTP is required").default(""),
  access_token: Yup.string().optional(),
  refresh_token: Yup.string().optional(),
});

export const RESEND_OTP_VERIFICATION_SCHEMA = Yup.object().shape({
  email: Yup.string(),
});

export type OtpVerificationType = Yup.InferType<typeof OTP_VERIFICATION_SCHEMA>;
export type ResendOtpVerificationType = Yup.InferType<
  typeof RESEND_OTP_VERIFICATION_SCHEMA
>;

export const otpVerificationFormInitialValues = OTP_VERIFICATION_SCHEMA.cast(
  {}
);
