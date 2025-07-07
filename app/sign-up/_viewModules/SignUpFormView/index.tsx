"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { SignUpForm } from "./SignUpForm";

import { RegisterType } from "../../_schema/signUp";

import { invitationSignUp, signUp } from "../../actions";

const { ERROR, SUCCESS, IS_SIGNING_UP } = commons;
const { VERIFICATION, GET_STARTED } = routes;

const SignUpFormWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { showNotification, showErrorNotification } = useNotification();

  const handleSignUp = async (payload: RegisterType) => {
    try {
      let res;
      const hasInvitation = searchParams.size;
      if (hasInvitation) {
        const { org, role, invitationKey } = Object.fromEntries(
          searchParams.entries()
        );
        const tempPayload = { ...payload, org, role, invitationKey };
        res = await invitationSignUp(tempPayload);
      } else {
        res = await signUp(payload);
      }

      if (res.code === SUCCESS) {
        if (!hasInvitation) {
          sessionStorage.setItem(IS_SIGNING_UP, "true");
        }
        router.push(
          `${VERIFICATION}?email=${payload.email}&returnTo=${
            hasInvitation ? GET_STARTED : ""
          }`
        );
      }
      if (res.code === ERROR) {
        showNotification(res.code, res.message);
      }
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return <SignUpForm onSubmit={handleSignUp} />;
};

export const SignUpFormView = () => (
  <Suspense>
    <SignUpFormWrapper />
  </Suspense>
);
