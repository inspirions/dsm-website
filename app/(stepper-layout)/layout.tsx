import { Card, Center, Container, Flex, Text } from "@mantine/core";

import { OnboardStepper } from "./viewModules/OnboardStepper";

const StepperLayout = ({ children }: { children: React.ReactNode }) => {
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
            {children}
          </Flex>
        </Card>
      </Container>
    </Center>
  );
};

export default StepperLayout;
