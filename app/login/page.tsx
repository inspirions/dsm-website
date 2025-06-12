import Link from "next/link";

import { Anchor, Box, Flex, Text } from "@mantine/core";

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
    <Flex justify="center" gap={2}>
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
    <Box bg="#09060FE5" c="white">
      <DsmFormWrapper
        title={LOGIN_TITLE}
        description={LOGIN_DESCRIPTION}
        formView={renderFormView}
      />
    </Box>
  );
};

export default Login;
