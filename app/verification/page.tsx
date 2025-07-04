import { Flex, Card, Text, Center } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { NoAccessPage } from "@/components/NoAccessPage";

import { LOGO_URL } from "@/constants/commons";
import { VERIFICATION_PAGE } from "@/constants/dataTestId";

import { VerifyOtpFormView } from "./_viewModules/VerifyOtpFormView";
import { hasOtpCookie } from "./actions";

const Verification = async () => {
  const hasCookie = await hasOtpCookie();

  if (!hasCookie) {
    return <NoAccessPage />;
  }

  return (
    <Center
      h="100vh"
      c="var(--mantine-color-dsm-light-0)"
      bg="var(--mantine-color-dsm-dark-primary-3)"
      data-testid={VERIFICATION_PAGE.ROOT}
    >
      <Card
        w={500}
        shadow="xl"
        radius="md"
        padding="30px 60px"
        bg="var(--mantine-color-dsm-dark-primary-0)"
      >
        <Flex direction={"column"} gap={"sm"}>
          <Flex justify="center">
            <DsmImage
              h={40}
              w={100}
              src={LOGO_URL}
              style={{ objectFit: "contain" }}
              data-testid={VERIFICATION_PAGE.LOGO}
            />
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
