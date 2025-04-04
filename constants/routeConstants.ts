const API_URL = process.env.API_URL;

export const routes = Object.freeze({
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  GET_STARTED: "/get-started",
  ORGANIZATION: "/organization",
  INVITE_EMPLOYEE: "/invite-employee",
});

export const API_ROUTES = Object.freeze({
  LOGIN_API: `${API_URL}/api/login`,
});
