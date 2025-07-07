import { Anchor, Center, Flex, lighten, Text } from "@mantine/core";

import { FORGOT_PASSWORD_PAGE } from "@/constants/dataTestId";
import { SIGN_UP_PAGE } from "@/constants/dataTestId";

import { ForgotPasswordFormView } from "./_viewModules/ForgotPasswordFormView";
import DsmFormWrapper from "@/components/DsmFormWrapper";
import { routes } from "@/constants/routeConstants";
import Link from "next/link";
import {
  FORGOT_PASSWORD_DESCRIPTION,
  FORGOT_PASSWORD_TITLE,
} from "@/constants/loginSignup";

const { LOGIN } = routes;

const renderFormTitle = (
  <Flex direction={"column"}>
    <Text size="xl" fw={700} ta="center">
      Forgot Password
    </Text>
    <Text c="gray" ta="center" fw={500}>
      Enter your email to reset your password.
    </Text>
  </Flex>
);

const renderForgotPasswordForm = () => (
  <>
    <ForgotPasswordFormView />
    <Flex justify="center" gap={2}>
      <Text>Go back to login? </Text>
      <Anchor
        c="var(--mantine-color-dsm-primary-5)"
        fw="bold"
        href={LOGIN}
        component={Link}
        data-testid={SIGN_UP_PAGE.LOGIN_LINK}
      >
        Log In
      </Anchor>
    </Flex>
  </>
);

const ForgotPassword = () => {
  return (
    <Center
      h="100vh"
      c="white"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
      data-testid={FORGOT_PASSWORD_PAGE.ROOT}
      style={{ flexDirection: "column", gap: "8px" }}
    >
      <DsmFormWrapper
        title={FORGOT_PASSWORD_TITLE}
        description={FORGOT_PASSWORD_DESCRIPTION}
        formView={renderForgotPasswordForm}
        formTitle={renderFormTitle}
      />
    </Center>
  );
};

export default ForgotPassword;
