import Link from "next/link";

import { Anchor, Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";

import { SignUpFormView } from "./_viewModules/SignUpFormView";

const { LOGIN } = routes;

const SignUp = () => {
  return (
    <Center h="100vh" bg="#fafbfc">
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Text size="xl" fw={700} ta="center">
            Create an account
          </Text>
          <SignUpFormView />
          <Flex justify="center" gap={2}>
            <Text>Already have an account?</Text>
            <Anchor c="blue" fw="bold" component={Link} href={LOGIN}>
              Log In
            </Anchor>
          </Flex>
        </Flex>
      </Card>
    </Center>
  );
};

export default SignUp;
