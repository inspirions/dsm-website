import { RegisterType } from "@/app/sign-up/_schema/signUp";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { SIGN_UP_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const signUpAPI = (payload: RegisterType) => {
  return postRequest(SIGN_UP_API, payload);
};
