"use client";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { commons, DSM_TOKEN } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { VerifyOtpForm } from "./VerifyOtpForm";

import { verifyOtp, resendOtp } from "../../actions";

import { OtpVerificationType } from "../../_schema/verifyOtp";

const { SUCCESS } = commons;
const { ORGANIZATION } = routes;

export const VerifyOtpFormView = () => {
  const router = useRouter();

  const handleVerifyOtp = async (payload: OtpVerificationType) => {
    try {
      const res = await verifyOtp(payload);

      if (res.code === SUCCESS && res.data.isVerified) {
        localStorage.setItem(DSM_TOKEN, JSON.stringify(res.data));
        router.push(ORGANIZATION);
      }

      notifications.show({
        title: res.code === SUCCESS ? "Success" : "Error",
        message: res.message,
        color: res.code === SUCCESS ? "green" : "red",
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "An error occured",
        color: "red",
      });
    }
  };

  const handleResendOtp = async (email: string) => {
    try {
      const res = await resendOtp({ email });
      notifications.show({
        title: res.code === SUCCESS ? "Success" : "Error",
        message: res.message,
        color: res.code === SUCCESS ? "green" : "red",
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "An error occured",
        color: "red",
      });
    }
  };

  return (
    <VerifyOtpForm onSubmit={handleVerifyOtp} onResend={handleResendOtp} />
  );
};
