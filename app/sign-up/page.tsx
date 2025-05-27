import Link from "next/link";

import { Anchor, Center, Flex, Text } from "@mantine/core";

import { routes } from "@/constants/routeConstants";

import { SignUpFormView } from "./_viewModules/SignUpFormView";
import { SIGN_UP_PAGE } from "@/constants/dataTestId";
import DsmFormWrapper from "@/components/DsmFormWrapper";
import { SIGN_UP_DESCRIPTION, SIGN_UP_TITLE } from "@/constants/loginSignup";

const { LOGIN } = routes;

const renderFormView = () => (
  <>
    <SignUpFormView />
    <Flex justify="center" gap={2}>
      <Text>Already have an account?</Text>
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

const SignUp = () => {
  return (
    <Center h="100vh" bg="#09060FE5" c="white" data-testid={SIGN_UP_PAGE.ROOT}>
      <DsmFormWrapper
        title={SIGN_UP_TITLE}
        description={SIGN_UP_DESCRIPTION}
        formView={renderFormView}
      />
    </Center>
  );
};

export default SignUp;
