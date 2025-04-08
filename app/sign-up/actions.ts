"use server";

import { signUpAPI } from "@/lib/api/endpoints/signUp";

import { RegisterType } from "./_schema/signUp";

export const signUp = async (payload: RegisterType) => {
  return await signUpAPI(payload);
};
