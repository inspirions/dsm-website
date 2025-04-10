"use server";

import { inviteEmployeeAPI } from "@/lib/api";

import { InviteEmployeeType } from "./_schema/InviteEmployee";

export const inviteEmployee = async (payload: InviteEmployeeType[]) => {
  return await inviteEmployeeAPI(payload);
};
