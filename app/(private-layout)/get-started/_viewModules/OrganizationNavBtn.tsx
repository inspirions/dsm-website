"use client";

import { DsmIconButton } from "@/components/DsmIconButton";
import { handleOrganizationNav } from "../actions";
import { DSM_APP_URL } from "@/constants/commons";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

export const OrganizationNavBtn = ({ orgId }: { orgId: string }) => {
  const handleClick = async () => {
    await handleOrganizationNav(orgId);
    window.location.href = DSM_APP_URL;
  };
  return (
    <DsmIconButton
      data-testid={`${GET_STARTED_PAGE.NAV_ORGANIZATION_BTN}-${orgId}`}
      size={"xl"}
      variant="subtle"
      iconProps={{ icon: "arrowRight", size: 24 }}
      onClick={handleClick}
    />
  );
};
