import { Divider, Flex, Grid, GridCol, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import {
  DAILY_SYNC_LOGO_URL,
  FACEBOOK_ICON_URL,
  INSTAGRAM_ICON_URL,
  X_ICON_URL,
  YOUTUBE_ICON_URL,
} from "@/constants/commons";
import { DsmContentWrapper } from "../DsmContentWrapper";

export const FooterLayout = () => {
  return (
    <DsmContentWrapper>
      <Flex direction="column" gap={24}>
        <Flex gap={18} justify="space-between" className="flex-col sm:flex-row">
          <DsmImage src={DAILY_SYNC_LOGO_URL} w="150px" />
          <Flex
            gap={{
              base: "sm",
              lg: "lg",
            }}
            align="center"
          >
            <DsmImage src={FACEBOOK_ICON_URL} w="32px" h="32px" />
            <DsmImage src={INSTAGRAM_ICON_URL} w="32px" h="32px" />
            <DsmImage src={YOUTUBE_ICON_URL} w="32px" h="32px" />
            <DsmImage src={X_ICON_URL} w="32px" h="32px" />
          </Flex>
        </Flex>
        <Divider />
        <Grid columns={12} overflow="hidden" gutter={24}>
          <GridCol
            span={{
              xm: 12,
              md: 12,
            }}
          >
            <Flex
              direction={{
                base: "column",
                xs: "row",
                md: "column",
              }}
              justify="space-between"
              gap="md"
            >
              <Text>
                DailySync.ai captures, summarizes, and highlights your daily
                standups using AI, helping teams stay aligned, save time, and
                focus on meaningful work with greater clarity and speed
              </Text>
              <Flex direction="column" gap="md">
                <Flex gap="xs" align="center">
                  <DsmCustomIcon icon="email" fill="white" />
                  <Text>support@dailysync.ai</Text>
                </Flex>
                {/* <Flex gap="xs" align="center">
                  <DsmCustomIcon icon="mapMarker" fill="white" />
                  <Text>Janani Marga, Lalitpur</Text>
                </Flex> */}
              </Flex>
            </Flex>
          </GridCol>

          {/* <GridCol
            span={{
              xm: 12,
              md: 3,
            }}
          >
            <Flex direction="column" gap="md">
              <Text>Privacy Policy</Text>
              <Text>Terms & Conditions</Text>
            </Flex>
          </GridCol> */}
        </Grid>
        <Text ta="center">
          Copyright © {new Date().getFullYear()} Daily Sync AI. All rights
          reserved.
        </Text>
      </Flex>
    </DsmContentWrapper>
  );
};
