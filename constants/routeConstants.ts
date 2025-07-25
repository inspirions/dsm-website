const API_URL = process.env.API_URL;

export const routes = {
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  INVITATION: "/invitation",
  GET_STARTED: "/get-started",
  VERIFICATION: "/verification",
  ORGANIZATION: "/organization",
  INVITE_EMPLOYEE: "/invite-employee",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
} as const;

export const API_ROUTES = {
  LOGIN_API: `${API_URL}/api/login`,
  USER_INFO_API: `${API_URL}/api/me`,
  RESEND_OTP_API: `${API_URL}/api/resend-otp`,
  ORGANIZATION_ROLE_API: `${API_URL}/api/role`,
  SIGN_UP_API: `${API_URL}/api/register-admin`,
  VERIFY_OTP_API: `${API_URL}/api/account-verify`,
  GET_INVITATION_API: `${API_URL}/api/invitation`,
  ORGANIZATION_API: `${API_URL}/api/organizations`,
  RESET_PASSWORD_API: `${API_URL}/api/reset-password`,
  FORGOT_PASSWORD_API: `${API_URL}/api/forgot-password`,
  INVITE_EMPLOYEE_API: `${API_URL}/api/mail/bulk-invite`,
  ACCEPT_INVITATION_API: `${API_URL}/api/invitation/accept`,
  INVITATION_SIGN_UP_API: `${API_URL}/api/register-invitation`,
  UPLOAD_FILE_API: `${API_URL}/api/uploadDocument?storageFolder=`,
} as const;
