import { Flex, Text } from "@mantine/core";

import { ORGANIZATION_PAGE } from "@/constants/dataTestId";

import { CreateOrganizationFormView } from "./_viewModules/CreateOrganizationFormView";

const Organization = () => {
  return (
    <Flex
      h="100%"
      gap="xl"
      direction="column"
      data-testid={ORGANIZATION_PAGE.ROOT}
    >
      <Flex direction="column" gap="xs">
        <Flex direction="column">
          <Text size="xl" fw={700} ta="center">
            Create your{" "}
            <Text span inherit c="#f28315">
              Organization
            </Text>
          </Text>
          <Text c="gray" ta="center" fw={500}>
            Please enter you organization details.
          </Text>
        </Flex>
      </Flex>
      <CreateOrganizationFormView />
    </Flex>
  );
};

export default Organization;
