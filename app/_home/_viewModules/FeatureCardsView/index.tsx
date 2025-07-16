import { Box, Flex, SimpleGrid, Text } from "@mantine/core";

import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { FeatureCardContentPropsType } from "./types";

import { FEATURE_CARDS } from "../../_constants";

import classes from "./index.module.css";

const CHUNKED_FEATURE_CARDS1 = FEATURE_CARDS.slice(0, 6);
const CHUNKED_FEATURE_CARDS2 = FEATURE_CARDS.slice(6, 8);

export const FeatureCardContent = ({
  title,
  icon,
  description,
}: FeatureCardContentPropsType) => (
  <Box
    key={title}
    p={{ base: 16, md: "32px 24px" }}
    className={classes.card}
    mih="160px"
  >
    <Flex gap="sm">
      <DsmCustomIcon icon={icon} size={40} className={classes.icon} />
      <Flex direction="column" gap="sm">
        <Text fw={600} lh={1.5} size="20px">
          {title}
        </Text>
        <Text lh={1.3}>{description}</Text>
      </Flex>
    </Flex>
  </Box>
);

export const FeatureCardsView = () => (
  <Flex direction="column" gap={{ base: 16, md: 40 }}>
    <SimpleGrid
      cols={{
        base: 1,
        xs: 2,
        md: 3,
      }}
      spacing={{ base: 16, md: 40 }}
    >
      {CHUNKED_FEATURE_CARDS1.map(({ icon, title, description }) => (
        <FeatureCardContent
          key={title}
          title={title}
          icon={icon}
          description={description}
        />
      ))}
    </SimpleGrid>
    <Flex justify="center">
      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 2 }}
        spacing={{ base: 16, md: 40 }}
      >
        {CHUNKED_FEATURE_CARDS2.map(({ icon, title, description }) => (
          <FeatureCardContent
            key={title}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </SimpleGrid>
    </Flex>
  </Flex>
);
