"use server";

import { cookies } from "next/headers";

import { resendOtpAPI, verifyOtpAPI } from "@/lib/api";

import {
  commons,
  DSM_COOKIE_DOMAIN,
  DSM_FORGOT_OTP_NAV,
  DSM_SIGN_UP_OTP_NAV,
  DSM_TOKEN,
  IS_PROD,
} from "@/constants/commons";

import {
  OtpVerificationType,
  ResendOtpVerificationType,
} from "./_schema/verifyOtp";

const { SUCCESS } = commons;

export const verifyOtp = async (payload: OtpVerificationType) => {
  const cookieStore = await cookies();

  const response = await verifyOtpAPI(payload);
  if (response.code === SUCCESS) {
    cookieStore.set({
      name: DSM_TOKEN,
      value: JSON.stringify(response.data),
      httpOnly: true,
      path: "/",
      maxAge: 3600,
      secure: IS_PROD,
      sameSite: "lax",
      domain: DSM_COOKIE_DOMAIN,
    });
  }

  return response;
};

export const resendOtp = async (payload: ResendOtpVerificationType) => {
  const response = await resendOtpAPI(payload);
  return response;
};

export const hasOtpCookie = async () => {
  const cookieStore = await cookies();
  const signUpOtpCookie = cookieStore.get(DSM_SIGN_UP_OTP_NAV);
  const forgotPasswordOtpCookie = cookieStore.get(DSM_FORGOT_OTP_NAV);
  return signUpOtpCookie || forgotPasswordOtpCookie;
};
