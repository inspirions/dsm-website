"use server";

import { createOrganizationAPI } from "@/lib/api/endpoints/organization";

import { OrganizationType } from "./_schema/organization";

export const createOrganization = async (payload: OrganizationType) => {
  return await createOrganizationAPI(payload);
};
