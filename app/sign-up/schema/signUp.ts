import * as Yup from "yup";

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&+=^#])[A-Za-z\d@$!%*?&+=^#]{8,}$/;

export const REGISTER_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Name is required").default(""),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .default(""),
  password: Yup.string()
    .required("Password is required")
    .matches(PASSWORD_REGEX, "Password is Invalid")
    .default(""),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required")
    .default(""),
});

export type RegisterType = Yup.InferType<typeof REGISTER_SCHEMA>;

export const registerFormInitialValues = REGISTER_SCHEMA.cast({});
