import { ForgotPasswordType } from "@/app/forgot-password/_schema/forgotPassword";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { FORGOT_PASSWORD_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const forgotPasswordAPI = (payload: ForgotPasswordType) => {
  return postRequest(FORGOT_PASSWORD_API, payload);
};
