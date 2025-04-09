import { InviteEmployeeType } from "@/app/(stepper-layout)/invite-employee/_schema/InviteEmployee";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { INVITE_EMPLOYEE_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const inviteEmployeeAPI = (payload: InviteEmployeeType[]) => {
  return postRequest(INVITE_EMPLOYEE_API, payload);
};
