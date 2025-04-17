"use server";

import { cookies } from "next/headers";

import { DSM_TOKEN, IS_PROD } from "@/constants/commons";
import { redirect } from "next/navigation";
import { routes } from "@/constants/routeConstants";

const { LOGIN } = routes;

export const handleLogout = async () => {
  const cookieStore = await cookies();
  cookieStore.set(DSM_TOKEN, "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "lax",
    domain: IS_PROD ? ".dailysync.ai" : ".test.local",
  });
  redirect(LOGIN);
};
