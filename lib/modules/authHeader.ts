"use server";

import { cookies } from "next/headers";

import { DSM_TOKEN } from "@/constants/commons";

export async function authHeader(jsonType = true) {
  const cookieStore = await cookies();
  const loginDetails = cookieStore.get(DSM_TOKEN);
  const contentType = jsonType ? { "Content-Type": "application/json" } : null;

  if (loginDetails) {
    const accessToken = JSON.parse(loginDetails.value).access_token;
    const authorization = `Bearer ${accessToken}`;
    return { Authorization: authorization, ...contentType };
  }

  return { ...contentType };
}
