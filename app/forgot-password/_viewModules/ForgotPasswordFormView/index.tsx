"use client";

import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { ForgotPasswordForm } from "./ForgotPasswordForm";

import { forgotPassword } from "../../actions";
import { ForgotPasswordType } from "../../_schema/forgotPassword";

const { SUCCESS } = commons;
const { VERIFICATION, RESET_PASSWORD } = routes;

export const ForgotPasswordFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleForgotPassword = async (payload: ForgotPasswordType) => {
    try {
      const res = await forgotPassword(payload);

      if (res.code === SUCCESS) {
        router.push(
          `${VERIFICATION}?email=${payload.email}&returnTo=${RESET_PASSWORD}`
        );
      }

      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return <ForgotPasswordForm onSubmit={handleForgotPassword} />;
};
