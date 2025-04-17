"use client";

import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { SignUpForm } from "./SignUpForm";

import { RegisterType } from "../../_schema/signUp";

import { signUp } from "../../actions";

const { SUCCESS, IS_SIGNING_UP } = commons;
const { VERIFICATION } = routes;

export const SignUpFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleSignUp = async (payload: RegisterType) => {
    try {
      const res = await signUp(payload);

      if (res.code === SUCCESS) {
        sessionStorage.setItem(IS_SIGNING_UP, "true");
        router.push(`${VERIFICATION}?email=${payload.email}`);
      }

      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return <SignUpForm onSubmit={handleSignUp} />;
};
