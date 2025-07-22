import { Flex, Card, Text, Center, lighten } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { NoAccessPage } from "@/components/NoAccessPage";
import { DsmNavigateBackBtn } from "@/components/DsmNavigateBackBtn";

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
      pos="relative"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
      data-testid={VERIFICATION_PAGE.ROOT}
    >
      <div className="absolute top-4 left-2 sm:left-6">
        <DsmNavigateBackBtn href="/" />
      </div>
      <Card
        w={500}
        shadow="xl"
        radius="md"
        padding="30px 60px"
        c="var(--mantine-color-dsm-light-0)"
        bg="var(--mantine-color-dsm-dark-primary-0)"
      >
        <Flex direction="column" gap="sm">
          <Flex justify="center">
            <DsmImage
              alt="logo"
              width={100}
              height={36}
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
