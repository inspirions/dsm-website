import { Flex, Text } from "@mantine/core";

import { InviteEmployeeFormView } from "./_viewModules/InviteEmployeeFormView";

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
