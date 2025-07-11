"use client";

import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { ResetPasswordFrom } from "./ResetPasswordFrom";

import { resetPassword } from "../../actions";
import { ResetPasswordType } from "../../_schema/resetPassword";

const { SUCCESS } = commons;
const { GET_STARTED } = routes;

export const ResetPasswordFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleResetPassword = async (payload: ResetPasswordType) => {
    try {
      const res = await resetPassword(payload);

      if (res.code === SUCCESS) {
        router.push(GET_STARTED);
      }

      showNotification(res.code, res.message);
      return res;
    } catch {
      showErrorNotification();
    }
  };

  return <ResetPasswordFrom onSubmit={handleResetPassword} />;
};
