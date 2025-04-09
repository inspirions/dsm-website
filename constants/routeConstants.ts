const API_URL = process.env.NEXT_API_URL;

export const routes = Object.freeze({
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  GET_STARTED: "/get-started",
  VERIFICATION: "/verification",
  ORGANIZATION: "/organization",
  INVITE_EMPLOYEE: "/invite-employee",
});

export const API_ROUTES = Object.freeze({
  LOGIN_API: `${API_URL}/api/login`,
  SIGN_UP_API: `${API_URL}/api/register-admin`,
  VERIFY_OTP_API: `${API_URL}/api/account-verify`,
  RESEND_OTP_API: `${API_URL}/api/resend-otp`,
  ORGANIZATION_API: `${API_URL}/api/organizations`,
  USER_INFO_API: `${API_URL}/api/me`,
  INVITE_EMPLOYEE_API: `${API_URL}/api/mail/bulk-invite`,
});
