import { Flex, Stack, Card, Text, Center } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";

import { VerifyOtpFormView } from "./_viewModules/VerifyOtpFormView";

const Verification = () => {
  return (
    <Center h="100vh" bg="#fafbfc">
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"sm"}>
          <Flex justify="center">
            <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
          </Flex>
          <Text size="xl" fw={700} ta="center">
            Verify OTP
          </Text>
          <Text size="sm" c="gray" ta="center">
            Enter the One-Time Password (OTP) sent to your email to verify your
            account.
          </Text>
          <VerifyOtpFormView />
        </Flex>
      </Card>
    </Center>
  );
};

export default Verification;
