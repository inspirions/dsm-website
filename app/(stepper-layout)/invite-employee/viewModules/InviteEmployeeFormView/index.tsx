"use client";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { commons } from "@/constants/commons";

import { InviteEmployeeForm } from "./InviteEmployeeForm";

import { inviteEmployee } from "../../actions";
import { InviteEmployeeType } from "../../_schema/InviteEmployee";

const { SUCCESS } = commons;

export const InviteEmployeeFormView = () => {
  const router = useRouter();

  const handleCreateOrganization = async (payload: InviteEmployeeType[]) => {
    try {
      const res = await inviteEmployee(payload);

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

  return <InviteEmployeeForm onSubmit={handleCreateOrganization} />;
};
