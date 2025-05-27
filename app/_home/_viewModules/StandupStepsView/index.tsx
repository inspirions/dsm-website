import { Divider, Flex, Text } from "@mantine/core";
import { STANDUP_STEPS_VIEW } from "../../_constants";

export const StandupStepsView = () => {
  return (
    <Flex gap={"40px"} w={"1200px"}>
      <Flex direction={"column"} align={"center"} gap={"37px"} py={"24px"}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Text fw={"bold"} lh={1.3} size={"96px"} c={"#763BC4"}>
            0{index + 1}
          </Text>
        ))}
      </Flex>
      <Divider orientation="vertical" color={"#A57CED"} />
      <Flex direction={"column"} gap={"48px"} py={"24px"}>
        {STANDUP_STEPS_VIEW.map((indvStandupStep) => (
          <Flex key={indvStandupStep.title} direction={"column"} gap={"md"}>
            <Text fw={600} lh={1.3} size="24px">
              {indvStandupStep.title}
            </Text>
            <Text lh={1.5} size="lg">
              {indvStandupStep.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
