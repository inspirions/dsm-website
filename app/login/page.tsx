import Link from "next/link";

import { Anchor, Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { LOGIN_PAGE } from "@/constants/dataTestId";
import { routes } from "@/constants/routeConstants";

import { LoginFormView } from "./_viewModules/LoginFormView";
import { NavigateToHomeBtnView } from "./_viewModules/NavigateToHomeBtnView";

const { SIGN_UP } = routes;

const Login = () => {
  return (
    <Center
      h="100vh"
      bg="#fafbfc"
      data-testid={LOGIN_PAGE.ROOT}
      style={{ flexDirection: "column", gap: "8px" }}
    >
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage
              w={150}
              h={150}
              imageUrl={LOGO_URL}
              data-testid={LOGIN_PAGE.LOGO}
            />
          </Flex>
          <Flex direction={"column"}>
            <Text size="xl" fw={700} ta="center">
              Log in to your account
            </Text>
            <Text c="gray" ta="center" fw={500}>
              Please enter you details.
            </Text>
          </Flex>
          <LoginFormView data-testid={LOGIN_PAGE.FORM} />
          <Flex justify="center" gap={2}>
            <Text>Don't have an account?</Text>
            <Anchor
              c="blue"
              fw="bold"
              href={SIGN_UP}
              component={Link}
              data-testid={LOGIN_PAGE.SIGN_UP_LINK}
            >
              Sign up
            </Anchor>
          </Flex>
        </Flex>
      </Card>
      <NavigateToHomeBtnView />
    </Center>
  );
};

export default Login;
