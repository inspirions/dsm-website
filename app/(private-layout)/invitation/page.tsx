import { cookies } from "next/headers";

import { Card, Center, Flex, Stack, Text, Tooltip } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { NoAccessPage } from "@/components/NoAccessPage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { DsmNavigateBackBtn } from "@/components/DsmNavigateBackBtn";
import { DsmAvatarWithRipple } from "@/components/DsmAvatarWithRipple";

import { dsmParseJwt } from "@/utils/parseJwt";
import { getFullName } from "@/utils/getFullName";

import { routes } from "@/constants/routeConstants";
import { DSM_TOKEN, INVITE_IMAGE_URL } from "@/constants/commons";

import { InvitationAcceptBtn } from "./_viewModules/InvitationAcceptBtn";

import { getInvitation } from "./actions";
import { SearchParamsType } from "./types";

const { GET_STARTED } = routes;

const Invitation = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const {
    org: orgId = "",
    expirationTime = "",
    invitationKey = "",
  } = await searchParams;

  if (!orgId) {
    return (
      <NoAccessPage
        redirectTo={GET_STARTED}
        redirectText="Go back to Organizations"
      />
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(DSM_TOKEN);
  const { sub: userId = "" } = dsmParseJwt(token?.value || "");

  const { data = {} } = await getInvitation(invitationKey);

  const expireDays = new Date(expirationTime)?.getDate() - new Date().getDate();

  if (!expireDays) {
    return (
      <NoAccessPage
        redirectTo={GET_STARTED}
        message="Your invitation has expired"
        redirectText="Go back to Organizations"
      />
    );
  }

  const employee = data?.employee;
  const inviteeEmail = employee?.companyEmail;
  const inviteeName = getFullName(
    employee?.firstName,
    employee?.middleName,
    employee?.lastName
  );
  const organizationName = data?.tenant?.name;
  const orgLogo = data?.tenant?.logoUrl;

  return (
    <Center
      bg="#fafbfc"
      h="calc(100vh - 60px)"
      style={{ flexDirection: "column", gap: "8px" }}
    >
      <Card
        shadow="xl"
        radius="md"
        p={"44px"}
        w={"500px"}
        style={{ gap: "32px" }}
      >
        <Flex justify={"center"}>
          <DsmImage src={INVITE_IMAGE_URL} w={"250px"} />
        </Flex>
        <Flex direction={"column"} gap={"lg"} ta={"center"}>
          <Text size="24px" c={"var(--mantine-color-dark-5)"} fw={700}>
            Pending Invite
          </Text>
          <Flex justify={"center"} align={"center"} gap={"lg"}>
            <DsmAvatarWithRipple
              avatarProps={{
                src: orgLogo,
                name: inviteeName,
                alt: "profile-image",
                size: "lg",
                color: "initials",
                bg: "gray.0",
              }}
            />
            <DsmCustomIcon
              icon="link"
              color="var(--mantine-color-dsm-primary-4)"
              size={40}
              strokeWidth={2}
            />
            <DsmAvatarWithRipple
              avatarProps={{
                src: orgLogo,
                name: organizationName,
                alt: "organization-image",
                size: "lg",
                color: "initials",
                bg: "gray.0",
              }}
            />
          </Flex>
          <Flex align={"center"} direction={"column"} gap={"lg"}>
            <Stack gap={"xs"}>
              <Text size="xl" c={"var(--mantine-color-gray-7)"}>
                <Tooltip label={inviteeEmail}>
                  <Text
                    span
                    size="xl"
                    c={"var(--mantine-color-dsm-primary-5)"}
                    fw={"bold"}
                  >
                    {inviteeName}
                  </Text>
                </Tooltip>{" "}
                has invited you to join
              </Text>
              <Text
                size="24px"
                fw={700}
                c={"var(--mantine-color-dsm-primary-6)"}
              >
                {organizationName}
              </Text>
            </Stack>
            <Text c={"var(--mantine-color-gray-7)"}>
              Your invitation expires in{" "}
              <Text span inherit c={"var(--mantine-color-red-6)"}>
                {expireDays} days
              </Text>
            </Text>
          </Flex>
          <Flex justify={"center"} gap={"xl"} w={"100%"}>
            <InvitationAcceptBtn tenantId={orgId} userId={userId} />
          </Flex>
        </Flex>
      </Card>
      <DsmNavigateBackBtn text="Back to Organizations" />
    </Center>
  );
};

export default Invitation;
