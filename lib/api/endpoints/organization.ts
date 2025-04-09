import { API_ROUTES } from "@/constants/routeConstants";

import { OrganizationType } from "@/app/(stepper-layout)/organization/_schema/organization";

import { apiHandler } from "../client";

const { CREATE_ORGANIZATION_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const createOrganizationAPI = (payload: OrganizationType) => {
  return postRequest(CREATE_ORGANIZATION_API, payload);
};
