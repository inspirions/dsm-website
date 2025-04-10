"use server";

import { cookies } from "next/headers";

import { resendOtpAPI, verifyOtpAPI } from "@/lib/api";

import { commons, DSM_TOKEN } from "@/constants/commons";

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
      secure: true,
      maxAge: 3600,
    });
  }

  return response;
};

export const resendOtp = async (payload: ResendOtpVerificationType) => {
  const response = await resendOtpAPI(payload);
  return response;
};
