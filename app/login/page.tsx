import Link from "next/link";

import { Anchor, Box, Flex, lighten, Text } from "@mantine/core";

import { LOGIN_PAGE } from "@/constants/dataTestId";
import { routes } from "@/constants/routeConstants";

import { LoginFormView } from "./_viewModules/LoginFormView";
import { NavigateToHomeBtnView } from "./_viewModules/NavigateToHomeBtnView";
import DsmFormWrapper from "@/components/DsmFormWrapper";
import { LOGIN_DESCRIPTION, LOGIN_TITLE } from "@/constants/loginSignup";

const { SIGN_UP } = routes;

const renderFormView = () => (
  <>
    <LoginFormView />
    <Flex justify="center" gap={6}>
      <Text>Don't have an account?</Text>
      <Anchor
        fw="bold"
        href={SIGN_UP}
        component={Link}
        data-testid={LOGIN_PAGE.SIGN_UP_LINK}
      >
        Sign up
      </Anchor>
    </Flex>
    <NavigateToHomeBtnView />
  </>
);

const Login = () => {
  return (
    <Box
      c="white"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
      data-testid={LOGIN_PAGE.ROOT}
    >
      <DsmFormWrapper
        title={LOGIN_TITLE}
        description={LOGIN_DESCRIPTION}
        formView={renderFormView}
      />
    </Box>
  );
};

export default Login;
