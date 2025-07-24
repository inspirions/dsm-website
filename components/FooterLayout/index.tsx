import Link from "next/link";
import { Divider, Flex, Grid, GridCol, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import {
  DAILY_SYNC_LOGO_URL,
  FACEBOOK_ICON_URL,
  INSTAGRAM_ICON_URL,
  LINKEDIN_ICON_URL,
} from "@/constants/commons";

import { DsmButton } from "../DsmButton";
import { DsmContentWrapper } from "../DsmContentWrapper";

const SOCIAL_MEDIA_LINKS = [
  {
    src: FACEBOOK_ICON_URL,
    alt: "facebook-icon",
    href: "https://www.facebook.com/profile.php?id=61578277686766",
  },
  {
    src: INSTAGRAM_ICON_URL,
    alt: "instagram-icon",
    href: "https://www.instagram.com/dailysync.ai",
  },
  {
    src: LINKEDIN_ICON_URL,
    alt: "linkedin-icon",
    href: "https://www.linkedin.com/company/dailysync-ai",
  },
];

export const FooterLayout = () => {
  return (
    <DsmContentWrapper>
      <Flex direction="column" gap={24}>
        <Flex gap={18} justify="space-between" className="flex-col sm:flex-row">
          <DsmImage
            src={DAILY_SYNC_LOGO_URL}
            alt="daily-sync-logo"
            width={150}
            height={54}
          />
          <Flex gap={{ base: "sm", lg: "lg" }} align="center">
            {SOCIAL_MEDIA_LINKS.map((indvLink) => (
              <Link href={indvLink.href} key={indvLink.alt} target="_blank">
                <DsmButton hideIcon variant="transparent" p={0}>
                  <DsmImage
                    width={32}
                    height={32}
                    src={indvLink.src}
                    alt={indvLink.alt}
                  />
                </DsmButton>
              </Link>
            ))}
          </Flex>
        </Flex>
        <Divider />
        <Grid columns={12} overflow="hidden" gutter={24}>
          <GridCol span={{ xm: 12, md: 6 }}>
            <Flex
              direction={{ base: "column", xs: "row", md: "column" }}
              justify="space-between"
              gap="md"
            >
              <Text>
                DailySync.AI captures, summarizes, and highlights your daily
                standups using AI, helping teams stay aligned, save time, and
                focus on meaningful work with greater clarity and speed
              </Text>
              <Flex direction="column" gap="md">
                <Flex gap="xs" align="center">
                  <DsmCustomIcon icon="email" fill="white" />
                  <Text>support@dailysync.ai</Text>
                </Flex>
              </Flex>
            </Flex>
          </GridCol>

          <GridCol span={{ xm: 12, md: 3 }} offset={{ xm: 0, md: 3 }}>
            <Flex direction="column" gap="md">
              <Link href="/privacy-policy" className="hover:text-gray-300">
                <Text>Privacy Policy</Text>
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                <Text>Terms & Conditions</Text>
              </Link>
            </Flex>
          </GridCol>
        </Grid>
        <Text ta="center">
          Copyright © {new Date().getFullYear()} DailySync AI. All rights
          reserved.
        </Text>
      </Flex>
    </DsmContentWrapper>
  );
};
