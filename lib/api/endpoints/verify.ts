import {
  OtpVerificationType,
  ResendOtpVerificationType,
} from "@/app/verification/_schema/verifyOtp";

import { API_ROUTES } from "@/constants/routeConstants";

import { apiHandler } from "../client";

const { VERIFY_OTP_API, RESEND_OTP_API } = API_ROUTES;

const { postRequest } = apiHandler;

export const verifyOtpAPI = (payload: OtpVerificationType) => {
  return postRequest(VERIFY_OTP_API, payload);
};

export const resendOtpAPI = (payload: ResendOtpVerificationType) => {
  return postRequest(RESEND_OTP_API, payload);
};
