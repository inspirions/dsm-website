import { API_ROUTES } from "@/constants/routeConstants";

import { OrganizationType } from "@/app/(private-layout)/(stepper-layout)/organization/_schema/organization";

import { apiHandler } from "../client";

const { ORGANIZATION_API } = API_ROUTES;

const { postRequest, getRequest } = apiHandler;

export const createOrganizationAPI = (payload: OrganizationType) => {
  return postRequest(`${ORGANIZATION_API}/create`, payload);
};

export const getOrganizationListAPI = () => {
  return getRequest(`${ORGANIZATION_API}/my-orgs`);
};
