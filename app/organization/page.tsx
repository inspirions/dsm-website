import { Flex, Stack, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";

import { CreateOrganizationForm } from "./viewModules/CreateOrganizationForm";

const Organization = () => {
  return (
    <Stack mih="100vh" pt="xl" p="xl">
      <Stack miw="500px">
        <Flex justify="center" mb="md">
          <DsmImage w={150} h={150} imageUrl={LOGO_URL} />
        </Flex>
        <Text size="xl" fw={700} ta="center">
          Create your account
        </Text>
        <Text c="gray" ta="center" fw={500} mb="lg">
          Please enter you organization details.
        </Text>
        <CreateOrganizationForm />
      </Stack>
    </Stack>
  );
};

export default Organization;
