"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";

import { handleOrganizationNav } from "@/app/(private-layout)/get-started/actions";

import { useNotification } from "@/hooks/useNotification";

import { commons, DSM_APP_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { InviteEmployeeForm } from "./InviteEmployeeForm";

import { inviteEmployee } from "../../actions";
import { InviteEmployeeType } from "../../_schema/InviteEmployee";

const { SUCCESS } = commons;
const { GET_STARTED } = routes;

export const InviteEmployeeFormView = () => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleCreateOrganization = async (
    payload: InviteEmployeeType[],
    orgId: string
  ) => {
    try {
      const res = await inviteEmployee(payload);

      if (res.code === SUCCESS) {
        await handleOrganizationNav(orgId);
        sessionStorage.clear();
        window.open(DSM_APP_URL, "_blank");
        router.push(GET_STARTED);
      }

      showNotification(res.code, res.message);
      return res;
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <Suspense>
      <InviteEmployeeForm onSubmit={handleCreateOrganization} />
    </Suspense>
  );
};
