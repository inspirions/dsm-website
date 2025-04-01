import * as Yup from "yup";

export const INVITE_EMPLOYEE_SCHEMA = Yup.object().shape({
  to: Yup.array()
    .of(Yup.string().email("Please enter a valid email address"))
    .required("Email is required")
    .default([]),
  by: Yup.string(),
  userType: Yup.string(),
});

export type InviteEmployeeType = Yup.InferType<typeof INVITE_EMPLOYEE_SCHEMA>;

export const inviteEmployeeFormInitialValues = INVITE_EMPLOYEE_SCHEMA.cast({});
