"use server";

import { cookies } from "next/headers";

import { getOrganizationListAPI } from "@/lib/api";

import { DSM_COOKIE_DOMAIN, DSM_ORG, IS_PROD } from "@/constants/commons";

export const getOrganizationList = async () => {
  const res = await getOrganizationListAPI();
  return res;
};

export const handleOrganizationNav = async (orgId: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: DSM_ORG,
    value: orgId,
    httpOnly: true,
    path: "/",
    maxAge: 3600,
    secure: IS_PROD,
    sameSite: "lax",
    domain: DSM_COOKIE_DOMAIN,
  });
};
