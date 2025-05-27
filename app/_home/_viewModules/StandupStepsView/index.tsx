import { Divider, Flex, Text } from "@mantine/core";

export const StandupStepsView = () => {
  return (
    <Flex gap={"40px"} w={"1200px"}>
      <Flex direction={"column"} align={"center"} gap={"37px"} py={"24px"}>
        <Text fw={"bold"} lh={1.3} size={"96px"} c={"#763BC4"}>
          01
        </Text>
        <Text fw={"bold"} lh={1.3} size={"96px"} c={"#A57CED"}>
          02
        </Text>
        <Text fw={"bold"} lh={1.3} size={"96px"} c={"#763BC4"}>
          03
        </Text>
      </Flex>
      <Divider orientation="vertical" color={"#A57CED"} />
      <Flex direction={"column"} gap={"48px"} py={"24px"}>
        <Flex direction={"column"} gap={"md"}>
          <Text fw={600} lh={1.3} size="24px">
            Record Your Standup
          </Text>
          <Text lh={1.5} size="lg">
            Easily log your daily standup updates directly within the app. Team
            members can submit their updates in real time or asynchronously, and
            DailySync.ai organizes everything into a clear, actionable summary.
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"md"}>
          <Text fw={600} lh={1.3} size="24px">
            AI Generates Summaries
          </Text>
          <Text lh={1.5} size="lg">
            Our intelligent AI listens to the standup inputs and transforms them
            into clear, organized summaries. Key updates, blockers, and
            decisions are captured and structured automatically—saving time and
            keeping everyone aligned without the need for manual note-taking.
          </Text>
        </Flex>
        <Flex direction={"column"} gap={"md"}>
          <Text fw={600} lh={1.3} size="24px">
            Access Insights Anytime
          </Text>
          <Text lh={1.5} size="lg">
            Stay in the loop effortlessly—chat with the AI to instantly retrieve
            team updates, track progress, and uncover patterns in productivity.
            Whether you're checking on project milestones or identifying
            blockers, insights are always just a message away.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
