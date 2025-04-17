import { Flex, Text } from "@mantine/core";

import { INVITE_EMPLOYEE_PAGE } from "@/constants/dataTestId";

import { InviteEmployeeFormView } from "./_viewModules/InviteEmployeeFormView";

const InviteEmployee = () => {
  return (
    <Flex
      h={"100%"}
      gap={"md"}
      direction={"column"}
      data-testid={INVITE_EMPLOYEE_PAGE.ROOT}
    >
      <Text size="xl" fw={700} ta="center">
        Invite Employees
      </Text>
      <InviteEmployeeFormView />
    </Flex>
  );
};

export default InviteEmployee;
