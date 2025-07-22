import { cookies } from "next/headers";

import { DsmNavigateBackBtn } from "@/components/DsmNavigateBackBtn";

import { DSM_TOKEN } from "@/constants/commons";

export const NavigateToHomeBtnView = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get(DSM_TOKEN);

  if (!token) {
    return null;
  }

  return <DsmNavigateBackBtn text="Back to Organizations" />;
};
