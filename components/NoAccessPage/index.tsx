import Link from "next/link";

import { Center, Paper, Text } from "@mantine/core";

import { routes } from "@/constants/routeConstants";
import { NO_ACCESS_PAGE } from "@/constants/dataTestId";

import { NoAccessPagePropsType } from "./types";

const { LOGIN } = routes;

export const NoAccessPage = (props: NoAccessPagePropsType) => {
  const {
    redirectTo = LOGIN,
    redirectText = "Go back to Login",
    message = "You do not have access to this page",
  } = props;
  return (
    <Paper data-testid={NO_ACCESS_PAGE} bg={"#09060FE5"} h={`100vh`} radius={0}>
      <Center h="calc(100vh - 60px)" style={{ flexDirection: "column" }}>
        <Text size="lg" c="#F5EFFE">
          {message}
        </Text>
        <Link
          href={redirectTo}
          style={{ color: "var(--mantine-color-dsm-primary-5)" }}
        >
          {redirectText}
        </Link>
      </Center>
    </Paper>
  );
};
