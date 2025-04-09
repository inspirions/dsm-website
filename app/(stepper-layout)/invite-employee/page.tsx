import { Flex, Group, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { InviteEmployeeFormView } from "./viewModules/InviteEmployeeFormView";

const InviteEmployee = () => {
  return (
    <Flex h={"100%"} gap={"md"} direction={"column"}>
      <Text size="xl" fw={700} ta="center">
        Invite Employees
      </Text>
      <InviteEmployeeFormView />
    </Flex>
  );
};

export default InviteEmployee;
