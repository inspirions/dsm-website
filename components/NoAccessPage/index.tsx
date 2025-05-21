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
    <Paper data-testid={NO_ACCESS_PAGE}>
      <Center
        bg="#fafbfc"
        h="calc(100vh - 60px)"
        style={{ flexDirection: "column" }}
      >
        <Text size="lg">{message}</Text>
        <Link href={redirectTo}>{redirectText}</Link>
      </Center>
    </Paper>
  );
};
