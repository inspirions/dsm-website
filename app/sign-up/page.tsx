import Link from "next/link";

import { Anchor, Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { SignUpFormView } from "./_viewModules/SignUpFormView";
import { SIGN_UP_PAGE } from "@/constants/dataTestId";

const { LOGIN } = routes;

const SignUp = () => {
  return (
    <Center h="100vh" bg="#fafbfc" data-testid={SIGN_UP_PAGE.ROOT}>
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage
              w={150}
              h={150}
              src={LOGO_URL}
              data-testid={SIGN_UP_PAGE.LOGO}
            />
          </Flex>
          <Text size="xl" fw={700} ta="center">
            Create an account
          </Text>
          <SignUpFormView />
          <Flex justify="center" gap={2}>
            <Text>Already have an account?</Text>
            <Anchor
              c="blue"
              fw="bold"
              href={LOGIN}
              component={Link}
              data-testid={SIGN_UP_PAGE.LOGIN_LINK}
            >
              Log In
            </Anchor>
          </Flex>
        </Flex>
      </Card>
    </Center>
  );
};

export default SignUp;
