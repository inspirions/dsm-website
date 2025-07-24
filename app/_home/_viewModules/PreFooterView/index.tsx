import Link from "next/link";

import { DsmButton } from "@/components/DsmButton";
import { Card, Flex, Text } from "@mantine/core";

import classes from "../../index.module.css";

export const PreFooterView = () => {
  return (
    <Card
      p="48px"
      w="100%"
      style={{ gap: "40px", alignItems: "center" }}
      bg="var(--mantine-color-dsm-light-0)"
    >
      <Flex direction="column" gap="24px" align="center">
        <Text className={classes.secTitle}>
          Ready to{" "}
          <Text span className={classes.highlight} inherit>
            Sync
          </Text>{" "}
          Your Team?
        </Text>
        <Text size="xl" ta="center" fw={500}>
          Keep your team in sync effortlessly.
        </Text>
      </Flex>
      <Link href="/sign-up" style={{ textDecoration: "none" }}>
        <DsmButton
          size="xl"
          px="24px"
          styles={{ section: { scale: 1.2 } }}
          iconProps={{ icon: "chevronRight", position: "right" }}
        >
          Get Started
        </DsmButton>
      </Link>
    </Card>
  );
};
