"use server";

import { inviteEmployeeAPI } from "@/lib/api/endpoints/inviteEmployee";

import { InviteEmployeeType } from "./_schema/InviteEmployee";

export const inviteEmployee = async (payload: InviteEmployeeType[]) => {
  return await inviteEmployeeAPI(payload);
};
