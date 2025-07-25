export const LOGO_URL = "./DailySyncLogo.png";
export const DSM_IMAGE_URL = "./DsmImage.png";
export const DAILY_SYNC_LOGO_URL = "./DailySyncLogo.png";
export const FALLBACK_IMAGE_URL = "./fallback_image.jpeg";
export const INVITE_IMAGE_URL = "./Invite.png";
export const HOME_PAGE_IMAGE_URL = "./HomePage.png";
export const STANDUP_IMAGE_URL = "./Standup.png";
export const PLACEHOLDER_IMAGE_URL = "./PlaceholderImg.png";
export const PLACEHOLDER1_IMAGE_URL = "./PlaceholderImg1.png";
export const FACEBOOK_ICON_URL = "./Facebook.png";
export const INSTAGRAM_ICON_URL = "./Instagram.png";
export const LINKEDIN_ICON_URL = "./Linkedin.png";

export const DSM_TOKEN = "DSM_TOKEN";

export const DSM_ORG = "DSM_ORG";

export const DSM_FORGOT_OTP_NAV = "DSM_FORGOT_OTP_NAV";

export const DSM_SIGN_UP_OTP_NAV = "DSM_SIGN_UP_OTP_NAV";

export const DSM_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4200";

export const IS_PROD = process.env.NODE_ENV === "production";

export const DSM_COOKIE_DOMAIN =
  process.env.NEXT_DSM_COOKIE_DOMAIN || ".local.test";

export const commons = {
  ERROR: "error",
  SUCCESS: "SUCCESS",
  OTP_TIME: "otpTime",
  IS_SIGNING_UP: "isSigningUp",
} as const;

export const STORAGE_FOLDER = {
  ORGANIZATION_LOGO: "organization-logo",
};

export const USER_ROLE_OPTIONS = [
  { label: "User", value: "employee" },
  { label: "Admin", value: "admin" },
];

export const HOME_TAB_CONTENT_IMAGE_URL = [
  "./HomeTabContent1.png",
  "./HomeTabContent2.png",
  "./HomeTabContent3.png",
  "./HomeTabContent4.png",
  "./HomeTabContent5.png",
];

export const SCREEN_WIDTH = {
  MOBILE: "(max-width: 599px)",
  TABLET: "(min-width: 768px)",
  DESKTOP: "(min-width: 960px)",
  XL_DESKTOP: "(min-width: 1280px)",
  XXL_DESKTOP: "(min-width: 1920px)",
} as const;
