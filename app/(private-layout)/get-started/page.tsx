import Link from "next/link";

import { Box, Center, Container, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmButton } from "@/components/DsmButton";
import { DsmTitleText } from "@/components/DsmTitleText";
import { FooterLayout } from "@/components/FooterLayout";
import { DsmContentWrapper } from "@/components/DsmContentWrapper";

import { DSM_IMAGE_URL } from "@/constants/commons";
import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { getOrganizationList } from "./actions";
import { OrganizationListView } from "./_viewModules/OrganizationListView";

const { LOGIN, ORGANIZATION } = routes;

const CreateOrganization = () => (
  <Center
    pb="75px"
    pt={{ base: 80, md: "xl" }}
    bg="linear-gradient(to top, #5D3A9B80 0%, #5D3A9B00 42%)"
  >
    <DsmContentWrapper>
      <Flex gap="xl" align="center" justify="center" px={20}>
        <Flex
          gap="lg"
          direction="column"
          align="flex-start"
          w={{ base: "100%", md: "60%", lg: "40%" }}
        >
          <DsmTitleText text="Get Started on {DailySync}" fz="42px" />
          <Text size="xl" c="var(--mantine-color-dsm-light-0)">
            It's an easy way to manage your daily tasks and stand ups for your
            project and teams. It's faster, better organized, and more secure.
          </Text>
          <Flex w="300px">
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
          width={400}
          height={400}
          src={DSM_IMAGE_URL}
          alt="get-started-image"
          data-testid={GET_STARTED_PAGE.STAND_UP_IMAGE}
          className="object-contain lg:w-2/5 xl:w-3/5 lg:h-auto xl:h-[486px] hidden lg:block"
        />
      </Flex>
    </DsmContentWrapper>
  </Center>
);

const GetStarted = async () => {
  const res = await getOrganizationList();

  /**
   * Deduplicates and combines created and joined organizations from API response.
   * @example
   * // Assuming res.data contains:
   * // {
   * //   createdOrgs: [{ id: 1, name: "Org A" }, { id: 2, name: "Org B" }],
   * //   joinedOrgs: [{ id: 2, name: "Org B" }, { id: 3, name: "Org C" }]
   * // }
   * // Result: [{ id: 1, name: "Org A" }, { id: 2, name: "Org B" }, { id: 3, name: "Org C" }]
   *
   */
  const organizations = res?.data
    ? (() => {
        const filteredOrgs = new Set();
        return [...res.data.createdOrgs, ...res.data.joinedOrgs].filter(
          (indvOrg) => {
            if (filteredOrgs.has(indvOrg.id)) return false;
            filteredOrgs.add(indvOrg.id);
            return true;
          }
        );
      })()
    : [];

  return (
    <Flex direction="column" data-testid={GET_STARTED_PAGE.ROOT}>
      {!organizations.length ? (
        <>
          <CreateOrganization />
          <Flex
            gap="lg"
            py="62px"
            align="center"
            direction="column"
            c="var(--mantine-color-gray-4)"
          >
            <Flex gap="sm" direction="column" align="center">
              <DsmTitleText text="Is your organization already on {DailySync}?" />
              <Text size="xl" ta="center">
                We couldn't find any existing organizations for your account
              </Text>
            </Flex>
            <Link
              href={LOGIN}
              style={{ textDecoration: "none" }}
              data-testid={GET_STARTED_PAGE.LOGIN_LINK}
            >
              <DsmButton hideIcon size="lg" variant="outline">
                Switch to another account
              </DsmButton>
            </Link>
          </Flex>
        </>
      ) : (
        <Box bg="linear-gradient(to top, #5D3A9B80 0%, #5D3A9B00 42%)">
          <Container size="lg">
            <Center h="calc(100vh - 82px)">
              <OrganizationListView organizations={organizations} />
            </Center>
          </Container>
        </Box>
      )}
      <Center pt="xl" bg="var(--mantine-color-dsm-dark-primary-3)">
        <FooterLayout />
      </Center>
    </Flex>
  );
};

export default GetStarted;
