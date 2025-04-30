import Link from "next/link";

import { Center, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import DsmImage from "@/components/DsmImage";

import { DSM_IMAGE_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { OrganizationListView } from "./_viewModules/OrganizationListView";
import { getOrganizationList } from "./actions";

const { ORGANIZATION } = routes;

const GetStarted = async () => {
  const res = await getOrganizationList();

  const organizations = res?.data
    ? [...res.data.createdOrgs, ...res.data.joinedOrgs]
    : [];

  return (
    <Flex direction={"column"} gap={"xl"} data-testid={GET_STARTED_PAGE.ROOT}>
      <Center pt={"xl"} bg={"#c6e0e3"} pb={"75px"}>
        <Flex gap={"xl"} align={"center"} justify={"center"}>
          <Flex gap={"lg"} w={"30%"} direction={"column"}>
            <Text size="60px" fw={"bold"}>
              Get started on DSM
            </Text>
            <Text size="xl">
              It's an easy way to manage your daily tasks and stand ups for your
              project and teams. It's faster, better organized, and more secure.
            </Text>
            <Flex w={"100%"}>
              <Link
                href={ORGANIZATION}
                style={{ width: "100%", textDecoration: "none" }}
                data-testid={GET_STARTED_PAGE.CREATE_ORGANIZATION_BTN}
              >
                <DsmButton hideIcon fullWidth size="lg">
                  Create an Organization
                </DsmButton>
              </Link>
            </Flex>
          </Flex>
          <DsmImage
            h={500}
            w="auto"
            fit="contain"
            radius={"md"}
            imageUrl={DSM_IMAGE_URL}
            data-testid={GET_STARTED_PAGE.STAND_UP_IMAGE}
          />
        </Flex>
      </Center>
      <Center>
        <OrganizationListView organizations={organizations} />
      </Center>
    </Flex>
  );
};

export default GetStarted;
