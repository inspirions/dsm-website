"use server";

import { cookies } from "next/headers";

import { signUpAPI } from "@/lib/api";

import { DSM_SIGN_UP_OTP_NAV, IS_PROD } from "@/constants/commons";

import { RegisterType } from "./_schema/signUp";

export const signUp = async (payload: RegisterType) => {
  const cookieStore = await cookies();

  const response = await signUpAPI(payload);

  cookieStore.set(DSM_SIGN_UP_OTP_NAV, "true", {
    httpOnly: true,
    path: "/",
    maxAge: 300,
    secure: IS_PROD,
    sameSite: "strict",
  });

  return response;
};
