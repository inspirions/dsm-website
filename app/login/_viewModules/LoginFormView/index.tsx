"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { LoginForm } from "./LoginForm";

import { login } from "../../actions";
import { LoginType } from "../../_schema/login";

const { SUCCESS } = commons;
const { GET_STARTED, INVITATION } = routes;

const LoginFormWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { showNotification, showErrorNotification } = useNotification();
  const handleLogin = async (payload: LoginType) => {
    try {
      const res = await login(payload);

      if (res.code === SUCCESS && res.data.isVerified) {
        if (searchParams.size) {
          router.push(`${INVITATION}?${searchParams.toString()}`);
        } else {
          router.push(GET_STARTED);
        }
      }

      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return <LoginForm onSubmit={handleLogin} />;
};

export const LoginFormView = () => (
  <Suspense>
    <LoginFormWrapper />
  </Suspense>
);
