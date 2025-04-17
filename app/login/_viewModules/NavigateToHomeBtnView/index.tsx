import Link from "next/link";
import { cookies } from "next/headers";

import { Anchor } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { DSM_TOKEN } from "@/constants/commons";
import { LOGIN_PAGE } from "@/constants/dataTestId";
import { routes } from "@/constants/routeConstants";

const { GET_STARTED } = routes;

export const NavigateToHomeBtnView = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get(DSM_TOKEN);

  if (!token) {
    return null;
  }

  return (
    <Anchor
      c="blue"
      fw="bold"
      href={GET_STARTED}
      component={Link}
      data-testid={LOGIN_PAGE.BACK_TO_HOME_BUTTON}
    >
      <DsmButton
        c={"blue"}
        variant="transparent"
        iconProps={{ icon: "arrowLeft" }}
      >
        Back to Home
      </DsmButton>
    </Anchor>
  );
};
