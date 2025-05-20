"use server";

import { API_ROUTES } from "@/constants/routeConstants";
import { apiHandler } from "../client";

const { UPLOAD_FILE_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const uploadFileAPI = async (
  storageFolder: string,
  payload: FormData
) => {
  const response = await postRequest(
    `${UPLOAD_FILE_API}${storageFolder}`,
    payload,
    true,
    false
  );
  return response;
};
