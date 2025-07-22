import { Center, lighten, Paper, Text } from "@mantine/core";

import { routes } from "@/constants/routeConstants";
import { NO_ACCESS_PAGE } from "@/constants/dataTestId";

import { DsmNavigateBackBtn } from "../DsmNavigateBackBtn";

import { NoAccessPagePropsType } from "./types";

const { LOGIN } = routes;

export const NoAccessPage = (props: NoAccessPagePropsType) => {
  const {
    redirectTo = LOGIN,
    redirectText = "Go back to Login",
    message = "You do not have access to this page",
  } = props;
  return (
    <Paper
      radius={0}
      h={`100vh`}
      data-testid={NO_ACCESS_PAGE}
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
    >
      <Center h="calc(100vh - 60px)" style={{ flexDirection: "column" }}>
        <Text size="lg" c="var(--mantine-color-dsm-light-0)">
          {message}
        </Text>
        <DsmNavigateBackBtn href={redirectTo} text={redirectText} />
      </Center>
    </Paper>
  );
};
