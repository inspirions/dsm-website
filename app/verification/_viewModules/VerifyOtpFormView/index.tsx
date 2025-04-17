"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { VerifyOtpForm } from "./VerifyOtpForm";

import { verifyOtp, resendOtp } from "../../actions";

import { OtpVerificationType } from "../../_schema/verifyOtp";

const { SUCCESS } = commons;
const { ORGANIZATION } = routes;

export const VerifyOtpFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleVerifyOtp = async (payload: OtpVerificationType) => {
    try {
      const res = await verifyOtp(payload);

      if (res.code === SUCCESS && res.data.isVerified) {
        router.push(ORGANIZATION);
      }

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
