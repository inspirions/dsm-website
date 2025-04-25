"use client";

import { DsmIconButton } from "@/components/DsmIconButton";
import { handleOrganizationNav } from "../actions";
import { DSM_APP_URL } from "@/constants/commons";

export const OrganizationNavBtn = ({ orgId }: { orgId: string }) => {
  const handleClick = async () => {
    await handleOrganizationNav(orgId);
    window.location.href = DSM_APP_URL;
  };
  return (
    <DsmIconButton
      size={"xl"}
      variant="subtle"
      iconProps={{ icon: "arrowRight", size: 24 }}
      onClick={handleClick}
    />
  );
};
