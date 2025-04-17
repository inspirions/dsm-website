"use client";

import { useRouter } from "next/navigation";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { CreateOrganizationForm } from "./CreateOrganizationForm";

import { createOrganization } from "../../actions";
import { OrganizationType } from "../../_schema/organization";

const { SUCCESS } = commons;
const { INVITE_EMPLOYEE } = routes;

export const CreateOrganizationFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleCreateOrganization = async (payload: OrganizationType) => {
    try {
      const res = await createOrganization(payload);

      if (res.code === SUCCESS && res.data.id) {
        router.push(`${INVITE_EMPLOYEE}?orgId=${res.data.id}`);
      }

      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return <CreateOrganizationForm onSubmit={handleCreateOrganization} />;
};
