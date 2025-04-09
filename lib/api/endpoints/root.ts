import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { getRequest } = apiHandler;

const { USER_INFO_API } = API_ROUTES;

export const getUserInfoAPI = () => {
  return getRequest(USER_INFO_API);
};
