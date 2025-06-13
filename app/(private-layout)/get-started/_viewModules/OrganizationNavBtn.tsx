"use client";

import { DsmIconButton } from "@/components/DsmIconButton";
import { handleOrganizationNav } from "../actions";
import { DSM_APP_URL } from "@/constants/commons";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";
import { OrganizationNavBtnPropsType } from "./types";

export const OrganizationNavBtn = (props: OrganizationNavBtnPropsType) => {
  const { orgId, ...restProps } = props;

  const handleClick = async () => {
    await handleOrganizationNav(orgId);
    window.location.href = DSM_APP_URL;
  };
  return (
    <DsmIconButton
      data-testid={`${GET_STARTED_PAGE.NAV_ORGANIZATION_BTN}-${orgId}`}
      size={"32px"}
      color="white"
      iconProps={{ icon: "arrowRight", size: 18 }}
      radius={"50%"}
      variant="outline"
      onClick={handleClick}
      {...restProps}
    />
  );
};
