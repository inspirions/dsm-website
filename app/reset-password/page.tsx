import { Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { NoAccessPage } from "@/components/NoAccessPage";

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
      bg="#fafbfc"
      data-testid={RESET_PASSWORD_PAGE.ROOT}
      style={{ flexDirection: "column", gap: "8px" }}
    >
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage
              w={150}
              h={150}
              src={LOGO_URL}
              data-testid={RESET_PASSWORD_PAGE.LOGO}
            />
          </Flex>
          <Flex direction={"column"}>
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
