import { LoginType } from "@/app/login/_schema/login";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { LOGIN_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const loginAPI = (payload: LoginType) => {
  return postRequest(LOGIN_API, payload);
};
