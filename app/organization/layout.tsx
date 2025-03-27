"use client";

import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { Flex, Stepper, Text } from "@mantine/core";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex mih="100vh" direction="column">
      <Flex>
        <Flex direction="column" pt="xl" px="44px" bg={"#f1ecec"}>
          <Text size="xl" fw="bold" mb="md">
            Welcome to DSM
          </Text>
          <Stepper active={1} radius="md" orientation="vertical" h={"100%"}>
            <Stepper.Step
              label="Sign Up"
              description="Create an account"
              completedIcon={<DsmCustomIcon icon="user" />}
            />
            <Stepper.Step
              label="Create Organization"
              description="Create your Organization"
              icon={<DsmCustomIcon icon="organization" />}
            />
          </Stepper>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default OrganizationLayout;
