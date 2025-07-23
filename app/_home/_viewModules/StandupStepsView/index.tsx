import { Divider, Flex, Text } from "@mantine/core";
import { STANDUP_STEPS_VIEW } from "../../_constants";

export const StandupStepsView = () => {
  return (
    <Flex gap={{ base: 20, md: 44 }}>
      <Flex
        direction="column"
        align="center"
        gap="48px"
        py="24px"
        justify="space-around"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Text
            key={`${index}-index-key`}
            fw="bold"
            lh={1.3}
            c="#763BC4"
            fz={{ base: 38, sm: 64 }}
          >
            0{index + 1}
          </Text>
        ))}
      </Flex>
      <Divider orientation="vertical" color="#A57CED" />
      <Flex direction="column" justify="space-around" gap="48px" py="28px">
        {STANDUP_STEPS_VIEW.map((indvStandupStep) => (
          <Flex key={indvStandupStep.title} direction="column" gap="sm">
            <Text fw={600} lh={1.3} fz={{ base: 18, sm: 22, md: 28 }}>
              {indvStandupStep.title}
            </Text>
            <Text lh={1.5} fz={{ base: 14, sm: 18, md: 24 }}>
              {indvStandupStep.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
