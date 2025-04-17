import { Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { ORGANIZATION_PAGE } from "@/constants/dataTestId";

import { CreateOrganizationFormView } from "./_viewModules/CreateOrganizationFormView";

const Organization = () => {
  return (
    <Flex
      h={"100%"}
      direction={"column"}
      gap={"xl"}
      data-testid={ORGANIZATION_PAGE.ROOT}
    >
      <Flex direction={"column"} gap={"xs"}>
        <Flex justify="center">
          <DsmImage
            w={80}
            h={80}
            imageUrl={LOGO_URL}
            data-testid={ORGANIZATION_PAGE.LOGO}
          />
        </Flex>
        <Flex direction={"column"}>
          <Text size="xl" fw={700} ta="center">
            Create your organization
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
