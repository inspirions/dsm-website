"use server";

import { cookies } from "next/headers";

import { loginAPI } from "@/lib/api";

import { commons } from "@/constants/commons";
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
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      domain:
        process.env.NODE_ENV === "production"
          ? ".app.dailysync.ai"
          : ".test.local",
    });
  }

  return response;
};
