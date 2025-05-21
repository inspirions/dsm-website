import Link from "next/link";

import { Anchor } from "@mantine/core";

import { routes } from "@/constants/routeConstants";

import { DsmButton } from "../DsmButton";

import { DsmNavigateBackBtnPropsType } from "./types";

const { GET_STARTED } = routes;

export const DsmNavigateBackBtn = (props: DsmNavigateBackBtnPropsType) => {
  const { href = GET_STARTED, text = "Back to Home" } = props;

  return (
    <Anchor c="blue" fw="bold" href={href} component={Link}>
      <DsmButton
        c={"blue"}
        variant="transparent"
        iconProps={{ icon: "arrowLeft" }}
      >
        {text}
      </DsmButton>
    </Anchor>
  );
};
