import * as Yup from "yup";

import { PASSWORD_REGEX } from "@/app/sign-up/_schema/signUp";

export const RESET_PASSWORD_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export type ResetPasswordType = Yup.InferType<typeof RESET_PASSWORD_SCHEMA>;

export const resetPasswordFormInitialValues = RESET_PASSWORD_SCHEMA.cast({
  password: "",
  confirmPassword: "",
});
