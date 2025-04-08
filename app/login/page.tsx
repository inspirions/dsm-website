import Link from "next/link";

import { Anchor, Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { LoginFormView } from "./_viewModules/LoginFormView";

const { SIGN_UP } = routes;

const Login = () => {
  return (
    <Center h="100vh" bg="#fafbfc">
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Flex direction={"column"}>
            <Text size="xl" fw={700} ta="center">
              Log in to your account
            </Text>
            <Text c="gray" ta="center" fw={500}>
              Please enter you details.
            </Text>
          </Flex>
          <LoginFormView />
          <Flex justify="center" gap={2}>
            <Text>Don't have an account?</Text>
            <Anchor c="blue" fw="bold" component={Link} href={SIGN_UP}>
              Sign up
            </Anchor>
          </Flex>
        </Flex>
      </Card>
    </Center>
  );
};

export default Login;
