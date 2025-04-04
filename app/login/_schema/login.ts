import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .default(""),
  password: Yup.string().required("Password is required").default(""),
});

export type LoginType = Yup.InferType<typeof LOGIN_SCHEMA>;

export const loginFormInitialValues = LOGIN_SCHEMA.cast({});
