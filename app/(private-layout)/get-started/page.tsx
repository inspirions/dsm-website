import Link from "next/link";

import { Center, Container, Flex, Text } from "@mantine/core";

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

const { ORGANIZATION } = routes;

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
    <Flex
      direction="column"
      data-testid={GET_STARTED_PAGE.ROOT}
      c="var(--mantine-color-dsm-light-0)"
    >
      <Center
        pt={{
          base: 80,
          md: "xl",
        }}
        pb={"75px"}
        bg="linear-gradient(to top, #5D3A9B80 0%, #5D3A9B00 42%)"
      >
        <DsmContentWrapper>
          <Flex gap="xl" align="center" justify="center" px={20}>
            <Flex
              gap="lg"
              w={{ base: "100%", md: "60%", lg: "40%" }}
              direction="column"
              align="flex-start"
            >
              <DsmTitleText
                text="Get Started on {DSM}"
                fz="48px"
                c="var(--mantine-color-dsm-light-0)"
              />
              <Text size="xl" c="var(--mantine-color-dsm-light-0)">
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
              h={"auto"}
              w={{
                md: "40%",
                lg: "60%",
              }}
              fit="contain"
              radius={"md"}
              src={DSM_IMAGE_URL}
              display={{
                base: "none",
                md: "block",
              }}
              data-testid={GET_STARTED_PAGE.STAND_UP_IMAGE}
            />
          </Flex>
        </DsmContentWrapper>
      </Center>
      <Container>
        <Center>
          <OrganizationListView organizations={organizations} />
        </Center>
      </Container>
      <Center pt={"xl"} bg="var(--mantine-color-dsm-dark-primary-3)">
        <DsmContentWrapper>
          <FooterLayout />
        </DsmContentWrapper>
      </Center>
    </Flex>
  );
};

export default GetStarted;
