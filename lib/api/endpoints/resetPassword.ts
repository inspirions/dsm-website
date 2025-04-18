import { ResetPasswordType } from "@/app/reset-password/_schema/resetPassword";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { RESET_PASSWORD_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const resetPasswordAPI = (payload: ResetPasswordType) => {
  return postRequest(RESET_PASSWORD_API, payload);
};
