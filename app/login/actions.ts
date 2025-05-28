"use server";

import { cookies } from "next/headers";

import { loginAPI } from "@/lib/api";

import {
  commons,
  DSM_COOKIE_DOMAIN,
  DSM_SIGN_UP_OTP_NAV,
  IS_PROD,
} from "@/constants/commons";
import { DSM_TOKEN } from "@/constants/commons";

import { LoginType } from "./_schema/login";

const { SUCCESS } = commons;

export const login = async (payload: LoginType) => {
  const cookieStore = await cookies();

  const response = await loginAPI(payload);
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

export const setOtpCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: DSM_SIGN_UP_OTP_NAV,
    value: "true",
    httpOnly: true,
    path: "/",
    maxAge: 300,
    secure: IS_PROD,
    sameSite: "strict",
  });
};
