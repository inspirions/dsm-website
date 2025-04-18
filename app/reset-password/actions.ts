"use server";

import { cookies } from "next/headers";

import { resetPasswordAPI } from "@/lib/api";

import {
  commons,
  DSM_COOKIE_DOMAIN,
  DSM_TOKEN,
  IS_PROD,
} from "@/constants/commons";

import { ResetPasswordType } from "./_schema/resetPassword";

const { SUCCESS } = commons;

export const resetPassword = async (payload: ResetPasswordType) => {
  const cookieStore = await cookies();

  const response = await resetPasswordAPI(payload);

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

export const hasResetCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(DSM_TOKEN);
};
