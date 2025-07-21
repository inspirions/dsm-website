import { cookies } from "next/headers";

import {
  Card,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";

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
    <Container className="h-[calc(100dvh- 64px)] p-12">
      <Center
        style={{
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          shadow="xl"
          radius="md"
          p="44px"
          style={{ gap: "32px" }}
          w={{ base: "100%", xs: "500px" }}
          bg="var(--mantine-color-dsm-dark-primary-0)"
        >
          <Flex justify="center">
            <DsmImage
              width={224}
              height={196}
              alt="invite-image"
              src={INVITE_IMAGE_URL}
            />
          </Flex>
          <Flex direction="column" gap="xl" ta="center">
            <Text size="24px" c="var(--mantine-color-dark-3)" fw={700}>
              Pending Invite
            </Text>
            <Flex justify="center" align="center" gap="lg">
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
            <Flex align="center" direction="column" gap="lg">
              <Stack gap="xs">
                <Text size="xl" fw={600} c="var(--mantine-color-gray-6)">
                  <Tooltip label={inviteeEmail}>
                    <Text
                      span
                      size="xl"
                      c="var(--mantine-color-dsm-primary-5)"
                      fw="bold"
                    >
                      {inviteeName}
                    </Text>
                  </Tooltip>{" "}
                  has invited you to join
                </Text>
                <Text
                  size="24px"
                  fw={700}
                  c="var(--mantine-color-dsm-primary-6)"
                >
                  {organizationName}
                </Text>
              </Stack>
              <Text c="var(--mantine-color-gray-6)" fz={14}>
                Your invitation expires in{" "}
                <Text
                  span
                  inherit
                  c="var(--mantine-color-red-6)"
                  fz={14}
                  ml={4}
                >
                  {expireDays} days
                </Text>
              </Text>
            </Flex>
            <Flex justify="center" gap="xl" w="100%">
              <InvitationAcceptBtn
                userId={userId}
                tenantId={orgId}
                invitationKey={invitationKey}
              />
            </Flex>
          </Flex>
        </Card>
        <DsmNavigateBackBtn text="Back to Organizations" />
      </Center>
    </Container>
  );
};

export default Invitation;
