"use client";

import { useRouter } from "next/navigation";

import { DsmButton } from "@/components/DsmButton";

import { useNotification } from "@/hooks/useNotification";

import { commons } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { acceptInvitation } from "../actions";

import { AcceptInvitationPayloadType as InvitationAcceptBtnPropsType } from "../types";

const { SUCCESS } = commons;
const { GET_STARTED } = routes;

export const InvitationAcceptBtn = (props: InvitationAcceptBtnPropsType) => {
  const router = useRouter();
  const { showNotification, showErrorNotification } = useNotification();

  const handleClick = async () => {
    try {
      const res = await acceptInvitation(props);
      if (res.code === SUCCESS) {
        router.push(GET_STARTED);
      }
      showNotification(res.code, res.message);
    } catch (error) {
      showErrorNotification();
    }
  };

  return (
    <DsmButton size="lg" fullWidth hideIcon onClick={handleClick}>
      Accept Invitation
    </DsmButton>
  );
};
