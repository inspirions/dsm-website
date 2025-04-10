"use server";

import { cookies } from "next/headers";

import { dsmParseJwt } from "@/utils/parseJwt";

import { getOrganizationListAPI } from "@/lib/api";

import { DSM_TOKEN } from "@/constants/commons";

export const getOrganizationList = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get(DSM_TOKEN);
  const userDetails = dsmParseJwt(token?.value || "");
  const userId = userDetails?.sub;

  const res = await getOrganizationListAPI(userId);
  return res;
};
