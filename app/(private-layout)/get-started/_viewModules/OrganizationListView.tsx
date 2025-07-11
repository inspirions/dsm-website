import Link from "next/link";

import { Anchor, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTitleText } from "@/components/DsmTitleText";
import { DsmContentWrapper } from "@/components/DsmContentWrapper";

import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { OrganizationCard } from "../_components/OrganizationCard";
import { OrganizationListViewPropsType } from "../types";

const { LOGIN, ORGANIZATION } = routes;

export const OrganizationListView = ({
  organizations,
}: OrganizationListViewPropsType) => (
  <DsmContentWrapper>
    <Flex
      h={"100%"}
      pb={"xl"}
      direction={"column"}
      justify={"space-between"}
      data-testid={GET_STARTED_PAGE.ORGANIZATION_LIST}
    >
      <Flex direction={"column"} gap={"64px"}>
        <Flex direction={"column"} align={"center"} gap={"12px"}>
          <DsmTitleText
            fz={"56px"}
            text="Welcome {Back!}"
            c="var(--mantine-color-dsm-light-0)"
            wrapperStyleProps={{
              style: { justifyContent: "center", alignItems: "center" },
            }}
          />
          <Text fw={500} size="24px" c="var(--mantine-color-gray-4)">
            Choose an organization below to get back to working with your team
          </Text>
        </Flex>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((indvOrg) => (
            <OrganizationCard key={`${indvOrg.id}-orgKey`} {...indvOrg} />
          ))}
        </div>
      </Flex>
      <Flex direction={"column"} gap={"xl"}>
        <Flex
          py={"xl"}
          px={"lg"}
          align={"center"}
          style={{ borderRadius: "8px" }}
          bg="linear-gradient(82.13deg, rgba(102, 80, 143, 0.25) 3.22%, rgba(26, 17, 43, 0.25) 212.75%)"
        >
          <DsmTitleText
            fz={"24px"}
            text="Want to use {DailySync} with a different organization?"
          />
          <Link
            href={ORGANIZATION}
            data-testid={GET_STARTED_PAGE.CREATE_ORGANIZATION_BTN}
          >
            <DsmButton
              size="lg"
              styles={{ section: { scale: 1.2 } }}
              iconProps={{ icon: "chevronRight", position: "right" }}
            >
              Create an Organization
            </DsmButton>
          </Link>
        </Flex>
        <Flex
          gap={"8px"}
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
          <DsmTitleText
            fw={700}
            fz={"32px"}
            c="var(--mantine-color-dsm-light-0)"
            text="Not seeing your {organization?}"
            wrapperStyleProps={{
              style: { justifyContent: "center", alignItems: "center" },
            }}
          />
          <Anchor
            fw={600}
            fz={"20px"}
            href={LOGIN}
            component={Link}
            c="var(--mantine-color-dsm-primary-3)"
            data-testid={GET_STARTED_PAGE.LOGIN_LINK}
          >
            Try a different email
          </Anchor>
        </Flex>
      </Flex>
    </Flex>
  </DsmContentWrapper>
);
