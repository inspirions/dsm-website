"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { DSM_TOKEN } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

const { LOGIN } = routes;

export const handleLogout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(DSM_TOKEN);
  redirect(LOGIN);
};
