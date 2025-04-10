"use server";

import { signUpAPI } from "@/lib/api";

import { RegisterType } from "./_schema/signUp";

export const signUp = async (payload: RegisterType) => {
  return await signUpAPI(payload);
};
