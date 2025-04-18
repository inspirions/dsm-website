import * as Yup from "yup";

export const FORGOT_PASSWORD_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .default(""),
});

export type ForgotPasswordType = Yup.InferType<typeof FORGOT_PASSWORD_SCHEMA>;

export const forgotPasswordFormInitialValues = FORGOT_PASSWORD_SCHEMA.cast({});
