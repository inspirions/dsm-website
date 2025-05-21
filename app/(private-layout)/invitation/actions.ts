"use server";

import {
  acceptInvitationAPI,
  getInvitationAPI,
  getOrganizationAPI,
} from "@/lib/api";

import { AcceptInvitationPayloadType } from "./types";

export const getOrganization = async (orgId: string) => {
  return await getOrganizationAPI(orgId);
};

export const acceptInvitation = async (
  payload: AcceptInvitationPayloadType
) => {
  return await acceptInvitationAPI(payload);
};

export const getInvitation = async (invitationId: string) => {
  return await getInvitationAPI(encodeURIComponent(invitationId));
};
