"use client";

import { Suspense } from "react";

import { handleOrganizationNav } from "@/app/(private-layout)/get-started/actions";

import { useNotification } from "@/hooks/useNotification";

import { commons, DSM_APP_URL } from "@/constants/commons";

import { InviteEmployeeForm } from "./InviteEmployeeForm";

import { inviteEmployee } from "../../actions";
import { InviteEmployeeType } from "../../_schema/InviteEmployee";
import { RoleType } from "../../types";

const { SUCCESS } = commons;

export const InviteEmployeeFormView = ({ roles }: { roles: RoleType[] }) => {
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
        window.location.href = DSM_APP_URL;
      }

      showNotification(res.code, res.message);
      return res;
    } catch {
      showErrorNotification();
    }
  };

  return (
    <Suspense>
      <InviteEmployeeForm onSubmit={handleCreateOrganization} roles={roles} />
    </Suspense>
  );
};
