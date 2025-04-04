import Link from "next/link";

import { Anchor, Card, Flex, Group, Stack, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { LoginFormView } from "./_viewModules/LoginFormView";

const { SIGN_UP } = routes;

const Login = () => {
  return (
    <Flex mih="100vh" direction={{ base: "column" }} bg="#fafbfc">
      <Stack justify="center" align="center" mt="6rem">
        <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
          <Flex justify="center" mb="md">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Text size="xl" fw={700} ta="center">
            Log in to your account
          </Text>
          <Text c="gray" ta="center" fw={500} mb="lg">
            Please enter you details.
          </Text>
          <LoginFormView />
          <Group mt="md" justify="center" gap={2}>
            <Text>Don't have an account?</Text>
            <Anchor c="blue" fw="bold" component={Link} href={SIGN_UP}>
              Sign up
            </Anchor>
          </Group>
        </Card>
      </Stack>
    </Flex>
  );
};

export default Login;
