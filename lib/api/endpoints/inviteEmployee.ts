import { InviteEmployeeType } from "@/app/(private-layout)/(stepper-layout)/invite-employee/_schema/InviteEmployee";

import { API_ROUTES } from "@/constants/routeConstants";

import { AcceptInvitationPayloadType } from "@/app/(private-layout)/invitation/types";

import { apiHandler } from "../client";

const { INVITE_EMPLOYEE_API, ACCEPT_INVITATION_API, GET_INVITATION_API } =
  API_ROUTES;

const { getRequest, postRequest } = apiHandler;

export const inviteEmployeeAPI = (payload: InviteEmployeeType[]) => {
  return postRequest(INVITE_EMPLOYEE_API, payload);
};

export const acceptInvitationAPI = (payload: AcceptInvitationPayloadType) => {
  return postRequest(ACCEPT_INVITATION_API, payload);
};

export const getInvitationAPI = (invitationId: string) => {
  return getRequest(`${GET_INVITATION_API}/${invitationId}`);
};
