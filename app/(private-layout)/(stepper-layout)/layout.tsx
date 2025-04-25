import { Card, Center, Container, Flex, Text } from "@mantine/core";

import { getUserInfoAPI } from "@/lib/api";

import { UserInfoProvider } from "@/providers/UserInfoProvider";

import { ONBOARD_STEPPER } from "@/constants/dataTestId";

import { OnboardStepper } from "./_viewModules/OnboardStepper";

const StepperLayout = async ({ children }: { children: React.ReactNode }) => {
  const res = await getUserInfoAPI();
  return (
    <Center h={"calc(100vh - 60px)"} data-testid={ONBOARD_STEPPER.ROOT}>
      <Container p={0} size="md" h={"70%"} w="100%">
        <Card
          p={0}
          h={"100%"}
          shadow="xl"
          radius="md"
          style={{ flexDirection: "row" }}
        >
          <Flex direction="column" pt="xl" px="44px" bg={"#fafafa"}>
            <Text size="xl" fw="bold" mb="md">
              Welcome to DSM
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
            <UserInfoProvider userInfo={res.data}>{children}</UserInfoProvider>
          </Flex>
        </Card>
      </Container>
    </Center>
  );
};

export default StepperLayout;
