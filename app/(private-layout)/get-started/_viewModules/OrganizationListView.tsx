import Link from "next/link";

import { Anchor, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmInfoAvatar } from "@/components/DsmInfoAvatar";

import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { OrganizationListViewPropsType } from "../types";
import { OrganizationNavBtn } from "./OrganizationNavBtn";
import { DsmTitleText } from "@/components/DsmTitleText";
import { OrganizationCard } from "../_components/OrganizationCard";
import { DsmContentWrapper } from "@/components/DsmContentWrapper";
import { ScrollToTopBtn } from "@/components/ScrollToTopBtn";

const { LOGIN } = routes;

export const OrganizationListView = ({
  organizations,
}: OrganizationListViewPropsType) => {
  if (!organizations.length) {
    return (
      <Flex direction={"column"} align={"center"} gap={"sm"}>
        <Flex direction={"column"} align={"center"}>
          <Text fw={"bold"} size="xl" c={"gray"}>
            Is your organization already on Dsm?
          </Text>
          <Text c={"gray"}>
            We couldn't find any existing organizations for your account
          </Text>
        </Flex>
        <Link
          href={LOGIN}
          style={{ textDecoration: "none" }}
          data-testid={GET_STARTED_PAGE.LOGIN_LINK}
        >
          <DsmButton hideIcon variant="outline">
            Switch to another account
          </DsmButton>
        </Link>
      </Flex>
    );
  }

  return (
    <DsmContentWrapper>
      <Flex
        gap={"40px"}
        direction={"column"}
        data-testid={GET_STARTED_PAGE.ORGANIZATION_LIST}
        style={{ padding: "60px 0" }}
      >
        <Flex direction={"column"} align={"center"} gap={"12px"}>
          <DsmTitleText
            c={"#F5EFFE"}
            text="Welcome {Back!}"
            wrapperStyleProps={{
              style: { justifyContent: "center", alignItems: "center" },
            }}
          />
          <Text size="24px" c={"#F5EFFE"}>
            Choose an organization below to get back to working with your team
          </Text>
        </Flex>
        <div className="grid grid-cols-3 gap-6">
          {organizations.map((indvOrg) => (
            <OrganizationCard key={`${indvOrg.id}-orgKey`} {...indvOrg} />
          ))}
        </div>
        <Flex
          align={"center"}
          justify={"center"}
          direction={"column"}
          mah={"300px"}
          gap={"30px"}
        >
          <Flex
            gap={"8px"}
            pt={"60px"}
            direction={"column"}
            align={"center"}
            justify={"center"}
          >
            <DsmTitleText
              c={"#F5EFFE"}
              fw={700}
              text="Not seeing your {organization?}"
              wrapperStyleProps={{
                style: { justifyContent: "center", alignItems: "center" },
              }}
            />
            <Anchor
              component={Link}
              href={LOGIN}
              data-testid={GET_STARTED_PAGE.LOGIN_LINK}
              fw={600}
              fz={"24px"}
            >
              Try a different email
            </Anchor>
          </Flex>
          <ScrollToTopBtn />
        </Flex>
      </Flex>
    </DsmContentWrapper>
  );
};
