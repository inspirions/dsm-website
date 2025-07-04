"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { VerifyOtpForm } from "./VerifyOtpForm";

import { verifyOtp, resendOtp } from "../../actions";

import { VerifyOtpPropsType } from "../../types";

const { SUCCESS, OTP_TIME } = commons;
const { ORGANIZATION, RESET_PASSWORD, GET_STARTED } = routes;

export const VerifyOtpFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleVerifyOtp = async (payload: VerifyOtpPropsType) => {
    const { returnTo, ...restPayload } = payload;
    try {
      const res = await verifyOtp(restPayload);

      if (res.code === SUCCESS && res.data.isVerified) {
        if (returnTo === RESET_PASSWORD) {
          router.push(`${RESET_PASSWORD}?email=${payload.email}`);
        } else if (returnTo === GET_STARTED) {
          router.push(GET_STARTED);
        } else {
          router.push(ORGANIZATION);
        }
      }
      localStorage.removeItem(OTP_TIME);
      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  const handleResendOtp = async (email: string) => {
    try {
      const res = await resendOtp({ email });
      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <Suspense>
      <VerifyOtpForm onSubmit={handleVerifyOtp} onResend={handleResendOtp} />
    </Suspense>
  );
};
