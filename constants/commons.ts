export const LOGO_URL = "./I_logo150.png";
export const DSM_IMAGE_URL = "./DsmImage.png";
export const FALLBACK_IMAGE_URL = "./fallback_image.jpeg";

export const DSM_TOKEN = "DSM_TOKEN";

export const DSM_ORG = "DSM_ORG";

export const DSM_FORGOT_OTP_NAV = "DSM_FORGOT_OTP_NAV";

export const DSM_SIGN_UP_OTP_NAV = "DSM_SIGN_UP_OTP_NAV";

export const DSM_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4200";

export const IS_PROD = process.env.NODE_ENV === "production";

export const DSM_COOKIE_DOMAIN =
  process.env.NEXT_DSM_COOKIE_DOMAIN || ".local.test";

export const commons = Object.freeze({
  SUCCESS: "SUCCESS",
  OTP_TIME: "otpTime",
  IS_SIGNING_UP: "isSigningUp",
});

export const STORAGE_FOLDER = {
  ORGANIZATION_LOGO: "organization-logo",
};

export const USER_ROLE_OPTIONS = [
  { label: "User", value: "employee" },
  { label: "Admin", value: "admin" },
];
