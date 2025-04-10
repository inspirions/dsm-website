"use client";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { SignUpForm } from "./SignUpForm";

import { RegisterType } from "../../_schema/signUp";

import { signUp } from "../../actions";

const { SUCCESS, IS_SIGNING_UP } = commons;
const { VERIFICATION } = routes;

export const SignUpFormView = () => {
  const router = useRouter();

  const handleSignUp = async (payload: RegisterType) => {
    try {
      const res = await signUp(payload);

      if (res.code === SUCCESS) {
        sessionStorage.setItem(IS_SIGNING_UP, "true");
        router.push(`${VERIFICATION}?email=${payload.email}`);
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

  return <SignUpForm onSubmit={handleSignUp} />;
};
