"use server";

import { getOrganizationRoleListAPI, inviteEmployeeAPI } from "@/lib/api";

import { InviteEmployeeType } from "./_schema/InviteEmployee";

export const inviteEmployee = async (payload: InviteEmployeeType[]) => {
  return await inviteEmployeeAPI(payload);
};

export const getOrganizationRole = async (orgId: string) => {
  return await getOrganizationRoleListAPI(orgId);
};
