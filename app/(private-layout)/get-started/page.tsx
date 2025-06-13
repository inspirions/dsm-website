import Link from "next/link";

import { Center, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import DsmImage from "@/components/DsmImage";

import { DSM_IMAGE_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { OrganizationListView } from "./_viewModules/OrganizationListView";
import { getOrganizationList } from "./actions";
import classes from "./index.module.css";
import { DsmContentWrapper } from "@/components/DsmContentWrapper";
import { DsmTitleText } from "@/components/DsmTitleText";
import { FooterLayout } from "@/components/FooterLayout";

const { ORGANIZATION } = routes;

const GetStarted = async () => {
  const res = await getOrganizationList();

  const organizations = res?.data
    ? [...res.data.createdOrgs, ...res.data.joinedOrgs]
    : [];

  return (
    <Flex
      direction="column"
      gap="xl"
      data-testid={GET_STARTED_PAGE.ROOT}
      bg="#211E27"
      color={"#F5EFFE"}
    >
      <Center
        pt={"xl"}
        pb={"75px"}
        bg="linear-gradient(to top, #5D3A9B80 0%, #5D3A9B00 42%)"
      >
        <DsmContentWrapper>
          <Flex gap="xl" align="center" justify="center">
            <Flex gap="lg" w="40%" direction="column" align="flex-start">
              <DsmTitleText
                text="Get Started on {DSM}"
                fz="48px"
                c={"#F5EFFE"}
              />
              <Text size="xl" c={"#F5EFFE"}>
                It's an easy way to manage your daily tasks and stand ups for
                your project and teams. It's faster, better organized, and more
                secure.
              </Text>
              <Flex w={"300px"}>
                <Link
                  href={ORGANIZATION}
                  style={{ width: "100%", textDecoration: "none" }}
                  data-testid={GET_STARTED_PAGE.CREATE_ORGANIZATION_BTN}
                >
                  <DsmButton
                    fullWidth
                    size="lg"
                    iconProps={{ icon: "chevronRight", position: "right" }}
                    styles={{ section: { scale: 1.2 } }}
                  >
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
              src={DSM_IMAGE_URL}
              data-testid={GET_STARTED_PAGE.STAND_UP_IMAGE}
            />
          </Flex>
        </DsmContentWrapper>
      </Center>
      <Center>
        <OrganizationListView organizations={organizations} />
      </Center>
      <Center>
        <FooterLayout />
      </Center>
    </Flex>
  );
};

export default GetStarted;
