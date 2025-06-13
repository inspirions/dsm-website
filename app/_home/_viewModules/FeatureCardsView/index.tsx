import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { Flex, SimpleGrid, Text } from "@mantine/core";
import { Box } from "@mantine/core";
import classes from "./index.module.css";
import { FEATURE_CARDS } from "../../_constants";

export const FeatureCardsView = () => (
  <SimpleGrid cols={3} spacing={"60px"} verticalSpacing={"60px"}>
    {FEATURE_CARDS.map(({ icon, title, description }) => (
      <Box key={title} maw={"360px"} p={"42px 24px"} className={classes.card}>
        <Flex direction={"column"} gap={"sm"}>
          <Flex justify={"space-between"} align={"center"}>
            <Text fw={600} lh={1.5} size="20px">
              {title}
            </Text>
            <DsmCustomIcon icon={icon} size={40} className={classes.icon} />
          </Flex>
          <Text lh={1.6}>{description}</Text>
        </Flex>
      </Box>
    ))}
  </SimpleGrid>
);
