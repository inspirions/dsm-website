import { Card, Center, Container, Flex, Text } from "@mantine/core";

import { getUserInfoAPI } from "@/lib/api/endpoints/root";

import { OnboardStepper } from "./viewModules/OnboardStepper";
import { UserInfoProvider } from "@/providers/UserInfoProvider";

const StepperLayout = async ({ children }: { children: React.ReactNode }) => {
  const res = await getUserInfoAPI();
  return (
    <Center h={"100vh"}>
      <Container p={0} size="md" h={"65%"} w="100%">
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
          <Flex flex={1} py={"lg"} px={"64px"} direction={"column"}>
            <UserInfoProvider userInfo={res.data}>{children}</UserInfoProvider>
          </Flex>
        </Card>
      </Container>
    </Center>
  );
};

export default StepperLayout;
