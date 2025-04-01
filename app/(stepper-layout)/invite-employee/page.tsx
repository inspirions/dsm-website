import { Flex, Group, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";

import { InviteEmployeeForm } from "./viewModules/InviteEmployeeForm";

const InviteEmployee = () => {
  return (
    <Flex h={"100%"} direction={"column"} justify={"space-between"}>
      <Flex direction={"column"} gap={"md"}>
        <Text size="xl" fw={700} ta="center">
          Invite Employees
        </Text>
        <InviteEmployeeForm />
      </Flex>
      <Group justify="flex-end">
        <DsmButton hideIcon size="xs" color="blue" variant="transparent">
          Skip for now
        </DsmButton>
        <DsmButton
          size="xs"
          color="blue"
          type="submit"
          iconProps={{ icon: "user" }}
        >
          Send Invites
        </DsmButton>
      </Group>
    </Flex>
  );
};

export default InviteEmployee;
