import { cookies } from "next/headers";

import { Card, Center, Container, Flex, Text } from "@mantine/core";

import { UserInfoProvider } from "@/providers/UserInfoProvider";

import { dsmParseJwt } from "@/utils/parseJwt";

import { DSM_TOKEN } from "@/constants/commons";
import { ONBOARD_STEPPER } from "@/constants/dataTestId";

import { OnboardStepper } from "./_viewModules/OnboardStepper";

const StepperLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get(DSM_TOKEN);
  const { sub: userId = "" } = dsmParseJwt(token?.value || "");

  return (
    <Center
      h={"calc(100vh - 82px)"}
      data-testid={ONBOARD_STEPPER.ROOT}
      c="#F5EFFE"
    >
      <Container p={0} size="md" h={"90%"} w="100%">
        <Card
          p={0}
          h={"100%"}
          shadow="xl"
          radius="md"
          style={{ flexDirection: "row" }}
          bg="#2a2437"
          c="#F5EFFE"
        >
          <Flex direction="column" pt="xl" px="44px" bg="#3c2f4f">
            <Text size="xl" fw="bold" mb="md">
              Welcome to Daily Sync
            </Text>
            <OnboardStepper />
          </Flex>
          <Flex
            flex={1}
            my={"lg"}
            px={"64px"}
            direction={"column"}
            style={{ overflow: "auto" }}
          >
            <UserInfoProvider userInfo={{ id: userId }}>
              {children}
            </UserInfoProvider>
          </Flex>
        </Card>
      </Container>
    </Center>
  );
};

export default StepperLayout;
