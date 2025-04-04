"use client";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { commons, DSM_TOKEN } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { LoginForm } from "./LoginForm";

import { login } from "../../actions";
import { LoginType } from "../../_schema/login";

const { SUCCESS } = commons;
const { ORGANIZATION } = routes;

export const LoginFormView = () => {
  const router = useRouter();

  const handleLogin = async (payload: LoginType) => {
    try {
      const res = await login(payload);

      if (res.code === SUCCESS) {
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

  return <LoginForm handleLogin={handleLogin} />;
};
