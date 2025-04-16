"use server";

import { cookies } from "next/headers";

import { dsmParseJwt } from "@/utils/parseJwt";

import { getOrganizationListAPI } from "@/lib/api";

import { DSM_TOKEN, IS_PROD } from "@/constants/commons";

export const getOrganizationList = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get(DSM_TOKEN);
  const userDetails = dsmParseJwt(token?.value || "");
  const userId = userDetails?.sub;

  const res = await getOrganizationListAPI(userId);
  return res;
};

export const handleOrganizationNav = async (orgId: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "DSM_ORG",
    value: orgId,
    httpOnly: true,
    path: "/",
    maxAge: 3600,
    secure: IS_PROD,
    sameSite: "lax",
    domain: IS_PROD ? ".dailysync.ai" : ".test.local",
  });
};
