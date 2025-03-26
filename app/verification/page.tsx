import { Flex, Stack, Card, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";

import { VerifyOtpForm } from "./viewModules/VerifyOtpForm";

const Verification = () => {
  return (
    <Flex mih="100vh" direction={{ base: "column" }} bg="#fafbfc">
      <Stack justify="center" align="center" mt="6rem">
        <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
          <Flex justify="center" mb="md">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Text size="xl" fw={700} ta="center" mb="xs">
            Verify OTP
          </Text>
          <Text size="sm" c="gray" ta="center" mb="md">
            Enter the One-Time Password (OTP) sent to your email to verify your
            account.
          </Text>
          <VerifyOtpForm />
        </Card>
      </Stack>
    </Flex>
  );
};

export default Verification;
