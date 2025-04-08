import Link from "next/link";

import { Anchor, Card, Flex, Group, Stack, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";

import { SignUpFormView } from "./_viewModules/SignUpFormView";

const SignUp = () => {
  return (
    <Flex mih="100vh" direction={{ base: "column" }} bg="#fafbfc">
      <Stack justify="center" align="center" mt="6rem">
        <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
          <Flex justify="center" mb="md">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Text size="xl" fw={700} ta="center" mb="lg">
            Create an account
          </Text>
          <SignUpFormView />
          <Group mt="md" justify="center" gap={2}>
            <Text>Already have an account?</Text>
            <Anchor c="blue" fw="bold" component={Link} href="/login">
              Log In
            </Anchor>
          </Group>
        </Card>
      </Stack>
    </Flex>
  );
};

export default SignUp;
