import Link from "next/link";

import { Center, Paper, Text } from "@mantine/core";

import { routes } from "@/constants/routeConstants";
import { NO_ACCESS_PAGE } from "@/constants/dataTestId";

const { LOGIN } = routes;

export const NoAccessPage = () => {
  return (
    <Paper data-testid={NO_ACCESS_PAGE}>
      <Center h="100vh" bg="#fafbfc" style={{ flexDirection: "column" }}>
        <Text>You do not have access to this page</Text>
        <Link href={LOGIN}>Go back to Login</Link>
      </Center>
    </Paper>
  );
};
