import Link from "next/link";

import { Card, Flex, Text, Stack, Box } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { COMMONS, PRICING_PLANS } from "../../_constants";

import classes from "./index.module.css";

const { GROWTH, ADVANCED, ENTERPRISE } = COMMONS;

export const PricingView = () => {
  return (
    <Box className={classes.pricingFlex}>
      {PRICING_PLANS.map(
        ({ name, price, period, features, highlight, users, remark }) => (
          <Card
            miw={220}
            maw={340}
            radius="lg"
            key={name}
            p="32px 24px"
            shadow={highlight ? "xl" : "md"}
            w={{ base: "100%", sm: "48%", md: "24%" }}
            className={
              name === GROWTH
                ? `${classes.pricingCard} ${classes.pricingCardSemiHighlight}`
                : highlight && name === ADVANCED
                  ? `${classes.pricingCard} ${classes.highlightCard}`
                  : classes.pricingCard
            }
          >
            <Flex direction="column" gap="md" flex={1} w="100%">
              <Stack gap={4}>
                <Text fw={700} fz={28}>
                  {name}
                </Text>
                <Stack gap={0}>
                  <Flex align="end" gap={6}>
                    <Text fw={700} h={62} fz={name === ENTERPRISE ? 32 : 40}>
                      {price}
                    </Text>
                    {period && (
                      <Text c="gray" fz={18} mb={4}>
                        {period}
                      </Text>
                    )}
                  </Flex>
                  {users && (
                    <Text c="gray" fz={18}>
                      {users}
                    </Text>
                  )}
                </Stack>
              </Stack>
              <Stack gap={8}>
                {features.map((feature) => (
                  <Flex key={feature} align="center" gap={8}>
                    <DsmCustomIcon
                      icon="circleCheck"
                      size={20}
                      style={{ color: "#54e382" }}
                    />
                    <Text fz={16} c="#fff">
                      {feature}
                    </Text>
                  </Flex>
                ))}
                {remark && (
                  <Text c="gray" fz={16}>
                    {remark}
                  </Text>
                )}
              </Stack>
            </Flex>
            <Link href="/sign-up" style={{ textDecoration: "none" }}>
              <Box
                className={
                  name === GROWTH
                    ? `${classes.buttonWrapper} ${classes.semiHighlightButtonWrapper}`
                    : highlight && name === ADVANCED
                      ? `${classes.buttonWrapper} ${classes.highlightButtonWrapper}`
                      : classes.buttonWrapper
                }
              >
                <DsmButton
                  fullWidth
                  hideIcon
                  size="md"
                  bg="transparent"
                  className={`${classes.pricingButton} ${
                    highlight ? classes.highlightPricingButton : ""
                  }`}
                >
                  Start Free Trial
                </DsmButton>
              </Box>
            </Link>
          </Card>
        )
      )}
    </Box>
  );
};
