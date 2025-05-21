"use server";

import { cookies } from "next/headers";

import { invitationSignUpAPI, signUpAPI } from "@/lib/api";

import { DSM_SIGN_UP_OTP_NAV, IS_PROD } from "@/constants/commons";

import { RegisterType } from "./_schema/signUp";

const OTP_COOKIE = {
  name: DSM_SIGN_UP_OTP_NAV,
  value: "true",
  httpOnly: true,
  path: "/",
  maxAge: 300,
  secure: IS_PROD,
  sameSite: "strict",
} as const;

export const signUp = async (payload: RegisterType) => {
  const cookieStore = await cookies();

  const response = await signUpAPI(payload);

  cookieStore.set(OTP_COOKIE);

  return response;
};

export const invitationSignUp = async (payload: RegisterType) => {
  const cookieStore = await cookies();

  const response = await invitationSignUpAPI(payload);

  cookieStore.set(OTP_COOKIE);

  return response;
};
