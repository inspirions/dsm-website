import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { Flex, SimpleGrid, Text } from "@mantine/core";
import { Box } from "@mantine/core";
import classes from "./index.module.css";
const FEATURE_CARDS = [
  {
    icon: "hourGlass" as const,
    title: "Standup Summaries",
    description:
      "Automatically capture and summarize daily standup meeting information accessible to everyone",
  },
  {
    icon: "note" as const,
    title: "AI Chat Assistant",
    description:
      "Chat with our AI to get updates about employees, teams, and projects without digging through notes.",
  },
  {
    icon: "note" as const,
    title: "AI Insights",
    description:
      "Generate valuable insights about team productivity, blockers, and progress trends over time.",
  },
  {
    icon: "note" as const,
    title: "Searchable History",
    description:
      "Instant access to past standups and discussions for easy reference and accountability",
  },
  {
    icon: "hourGlass" as const,
    title: "Time-Saving Updates",
    description:
      "Eliminate redundant status meetings with instant AI-powered updates that keep your team informed without disrupting their workflow.",
  },
  {
    icon: "handShake" as const,
    title: "Remote-Ready",
    description:
      "Designed for distributed teams with async updates, timezone-friendly summaries, and seamless collaboration across locations.",
  },
];

export const FeatureCardsView = () => (
  <SimpleGrid cols={3} spacing={"60px"} verticalSpacing={"60px"}>
    {FEATURE_CARDS.map(({ icon, title, description }) => (
      <Box key={title} maw={"360px"} p={"42px 24px"} className={classes.card}>
        <Flex direction={"column"} gap={"sm"}>
          <Flex justify={"space-between"} align={"center"}>
            <Text fw={600} lh={1.5} size="20px">
              {title}
            </Text>
            <DsmCustomIcon icon={icon} size={40} className={classes.iconn} />
          </Flex>
          <Text lh={1.6}>{description}</Text>
        </Flex>
      </Box>
    ))}
  </SimpleGrid>
);
