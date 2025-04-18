"use server";

import { cookies } from "next/headers";

import { forgotPasswordAPI } from "@/lib/api";

import { DSM_FORGOT_OTP_NAV, IS_PROD } from "@/constants/commons";

import { ForgotPasswordType } from "./_schema/forgotPassword";

export const forgotPassword = async (payload: ForgotPasswordType) => {
  const cookieStore = await cookies();
  const response = await forgotPasswordAPI(payload);

  cookieStore.set(DSM_FORGOT_OTP_NAV, "true", {
    httpOnly: true,
    path: "/",
    maxAge: 300,
    secure: IS_PROD,
    sameSite: "strict",
  });

  return response;
};
