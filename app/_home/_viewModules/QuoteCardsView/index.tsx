import { Avatar, Box, Divider, Flex, Text } from "@mantine/core";

import { QUOTES } from "../../_constants";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

export const QuoteCardsView = () =>
  QUOTES.map(({ name, quote, designation }) => (
    <Box
      key={name}
      w={{ base: "100%", md: 588 }}
      bd="1px solid"
      bg="var(--mantine-color-dsm-dark-primary-0)"
      style={{
        borderRadius: "12px",
        boxShadow: "0 4px 32px 0 rgba(162, 89, 247, 0.15)",
      }}
    >
      <Flex
        direction="column"
        h="100%"
        gap="md"
        justify="space-between"
        p={{ base: 40 }}
      >
        <Flex direction="column" gap="md">
          <Flex align="center" gap="md">
            <Avatar size={64} name={name} />
            <Flex direction="column" gap="6px">
              <Text lh={1.3} size="20px" fw={600}>
                {name}
              </Text>
              <Text fw={500} lh={1.5}>
                {designation}
              </Text>
            </Flex>
          </Flex>
          <Flex gap="xs">
            {Array.from({ length: 5 }).map((_, index) => (
              <DsmCustomIcon key={index} icon="star" size={20} color="yellow" />
            ))}
          </Flex>
          <Text lh={1.5} size="lg">
            {quote}
          </Text>
        </Flex>
        <Flex direction="column" gap="md">
          <Divider />
          <Flex align="center" gap="xs">
            <DsmCustomIcon icon="verification" size={20} />
            <Text>Verified Customer</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  ));
