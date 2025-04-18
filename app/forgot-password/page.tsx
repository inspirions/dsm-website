import { Card, Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { FORGOT_PASSWORD_PAGE } from "@/constants/dataTestId";

import { ForgotPasswordFormView } from "./_viewModules/ForgotPasswordFormView";

const ForgotPassword = () => {
  return (
    <Center
      h="100vh"
      bg="#fafbfc"
      data-testid={FORGOT_PASSWORD_PAGE.ROOT}
      style={{ flexDirection: "column", gap: "8px" }}
    >
      <Card shadow="xl" radius="md" padding="30px 60px" w={500}>
        <Flex direction={"column"} gap={"md"}>
          <Flex justify="center">
            <DsmImage
              w={150}
              h={150}
              imageUrl={LOGO_URL}
              data-testid={FORGOT_PASSWORD_PAGE.LOGO}
            />
          </Flex>
          <Flex direction={"column"}>
            <Text size="xl" fw={700} ta="center">
              Forgot Password
            </Text>
            <Text c="gray" ta="center" fw={500}>
              Enter your email to reset your password.
            </Text>
          </Flex>
          <ForgotPasswordFormView />
        </Flex>
      </Card>
    </Center>
  );
};

export default ForgotPassword;
