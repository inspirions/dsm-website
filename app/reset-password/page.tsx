import { Card, Center, Flex, lighten, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { NoAccessPage } from "@/components/NoAccessPage";
import { DsmNavigateBackBtn } from "@/components/DsmNavigateBackBtn";

import { RESET_PASSWORD_PAGE } from "@/constants/dataTestId";

import { ResetPasswordFormView } from "./_viewModules/ResetPasswordFormView";
import { hasResetCookie } from "./actions";

const ResetPassword = async () => {
  const hasCookie = await hasResetCookie();

  if (!hasCookie) {
    return <NoAccessPage />;
  }

  return (
    <Center
      h="100vh"
      pos="relative"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
      style={{ flexDirection: "column", gap: "8px" }}
      data-testid={RESET_PASSWORD_PAGE.ROOT}
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
        <Flex direction="column" gap="md">
          <Flex justify="center">
            <DsmImage
              alt="logo"
              width={100}
              height={36}
              src={LOGO_URL}
              style={{ objectFit: "contain" }}
              data-testid={RESET_PASSWORD_PAGE.LOGO}
            />
          </Flex>
          <Flex direction="column">
            <Text size="xl" fw={700} ta="center">
              Reset Password
            </Text>
            <Text c="gray" ta="center" fw={500}>
              Please enter your new password.
            </Text>
          </Flex>
          <ResetPasswordFormView />
        </Flex>
      </Card>
    </Center>
  );
};

export default ResetPassword;
