export const LOGO_URL = "./I_logo150.png";
export const DSM_IMAGE_URL = "./DsmImage.png";

export const DSM_TOKEN = "DSM_TOKEN";

export const DSM_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4200";

export const IS_PROD = process.env.NODE_ENV === "production";

export const commons = Object.freeze({
  SUCCESS: "SUCCESS",
  OTP_TIME: "otpTime",
  IS_SIGNING_UP: "isSigningUp",
});
