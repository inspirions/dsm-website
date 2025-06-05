import Link from "next/link";

import { Anchor, Card, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmInfoAvatar } from "@/components/DsmInfoAvatar";

import { routes } from "@/constants/routeConstants";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { OrganizationListViewPropsType } from "../types";
import { OrganizationNavBtn } from "./OrganizationNavBtn";

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
    <Flex
      gap={"sm"}
      direction={"column"}
      data-testid={GET_STARTED_PAGE.ORGANIZATION_LIST}
    >
      <Flex direction={"column"} align={"center"} gap={"4px"}>
        <Text fw={"bold"} size="32px">
          Welcome back!
        </Text>
        <Text>
          Choose an organization below to get back to working with your team
        </Text>
      </Flex>
      {organizations.map((indvOrg) => (
        <Card key={indvOrg.id} shadow="xl" radius="md" miw={"600px"} p={"xl"}>
          <Flex gap={"sm"} justify={"space-between"}>
            <DsmInfoAvatar
              label={indvOrg.name}
              labelProps={{ fw: "bold", style: { fontSize: "20px" } }}
              avatarProps={{ size: 40, radius: "lg" }}
            />
            <OrganizationNavBtn orgId={indvOrg.id} />
          </Flex>
        </Card>
      ))}
      <Flex direction={"column"} align={"center"} py={"lg"}>
        <Text c={"gray"}>Not seeing your organization?</Text>
        <Anchor
          component={Link}
          href={LOGIN}
          data-testid={GET_STARTED_PAGE.LOGIN_LINK}
        >
          Try a different email
        </Anchor>
      </Flex>
    </Flex>
  );
};
