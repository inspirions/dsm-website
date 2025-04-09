"use client";

import { useRouter } from "next/navigation";

import { notifications } from "@mantine/notifications";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { CreateOrganizationForm } from "./CreateOrganizationForm";

import { createOrganization } from "../../actions";
import { OrganizationType } from "../../_schema/organization";

const { SUCCESS } = commons;
const { INVITE_EMPLOYEE } = routes;

export const CreateOrganizationFormView = () => {
  const router = useRouter();

  const handleCreateOrganization = async (payload: OrganizationType) => {
    try {
      const res = await createOrganization(payload);

      if (res.code === SUCCESS) {
        router.push(INVITE_EMPLOYEE);
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

  return <CreateOrganizationForm onSubmit={handleCreateOrganization} />;
};
