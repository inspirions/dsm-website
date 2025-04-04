import { authHeader } from "@/lib/modules/authHeader";
import { handleResponse } from "@/lib/modules/handleResponse";

type AllType =
  | string
  | number
  | Blob
  | File
  | Record<string, string | number | null>;

async function getRequest(requestURL: string, auth = true) {
  const requestOptions: RequestInit = {
    method: "GET",
  };
  if (auth) {
    const authHeaders = await authHeader();
    requestOptions.headers = authHeaders;
  }
  return fetch(requestURL, requestOptions).then(handleResponse);
}

async function postRequest<T>(
  requestURL: string,
  payload?: T | AllType,
  auth = true,
  stringify = true
) {
  const requestOptions: RequestInit = {
    method: "POST",
    ...(payload && {
      body: stringify
        ? (JSON.stringify(payload) as BodyInit)
        : (payload as BodyInit),
    }),
  };

  if (auth) {
    const authHeaders = await authHeader(stringify);
    requestOptions.headers = authHeaders;
  }
  return fetch(requestURL, requestOptions).then(handleResponse);
}

async function deleteRequest<T>(
  requestURL: string,
  payload?: T | AllType,
  auth = true,
  stringify = true
) {
  const requestOptions: RequestInit = {
    method: "DELETE",
  };
  if (payload) {
    requestOptions.body = stringify
      ? (JSON.stringify(payload) as BodyInit)
      : (payload as BodyInit);
  }
  if (auth) {
    const authHeaders = await authHeader();
    requestOptions.headers = authHeaders;
  }
  return fetch(requestURL, requestOptions).then(handleResponse);
}

async function putRequest<T>(
  requestURL: string,
  payload?: T | AllType,
  auth = true,
  stringify = true
) {
  const requestOptions: RequestInit = {
    method: "PUT",
    ...(payload && {
      body: stringify
        ? (JSON.stringify(payload) as BodyInit)
        : (payload as BodyInit),
    }),
  };
  if (auth) {
    const authHeaders = await authHeader(stringify);
    requestOptions.headers = authHeaders;
  }
  return fetch(requestURL, requestOptions).then(handleResponse);
}

const apiHandler = {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
};

export { apiHandler };
