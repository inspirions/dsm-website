"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  DSM_COOKIE_DOMAIN,
  DSM_ORG,
  DSM_TOKEN,
  IS_PROD,
} from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

const { LOGIN } = routes;

const commonCookieOptions = {
  path: "/",
  maxAge: 0,
  httpOnly: true,
  secure: IS_PROD,
  sameSite: "lax",
  domain: DSM_COOKIE_DOMAIN,
} as const;

export const handleLogout = async () => {
  const cookieStore = await cookies();
  cookieStore.set(DSM_TOKEN, "", commonCookieOptions);
  cookieStore.set(DSM_ORG, "", commonCookieOptions);
  redirect(LOGIN);
};
