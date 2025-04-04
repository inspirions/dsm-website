import { api } from "../client";

export const login = () => {
  return api.url("/login").get().json();
};
