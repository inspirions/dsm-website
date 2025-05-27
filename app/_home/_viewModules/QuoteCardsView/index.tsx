import { Avatar, Box, Flex, Text } from "@mantine/core";

import {
  PLACEHOLDER1_IMAGE_URL,
  PLACEHOLDER_IMAGE_URL,
} from "@/constants/commons";

const QUOTES = [
  {
    name: "Sahil Gurung",
    designation: "Chief Strategy Officer at Quantum Solutions",
    quote: `“With DailySync.ai, our standups are finally efficient. The AI handles summaries and action items so I can focus on leading, not note-taking. It’s like having a reliable assistant in every meeting.”`,
    image: PLACEHOLDER_IMAGE_URL,
  },
  {
    name: "Rajesh Pandey",
    designation: "Chief Technology Officer at Quantum Solutions",
    quote: `“DailySync.ai has streamlined our standups completely. It captures discussions, summarizes them clearly, and highlights key updates and blockers. We save time every day and stay better aligned as a team.”`,
    image: PLACEHOLDER1_IMAGE_URL,
  },
];

export const QuoteCardsView = () =>
  QUOTES.map(({ name, image, quote, designation }) => (
    <Box
      key={name}
      w={"588px"}
      pos={"relative"}
      bd={"1px solid"}
      style={{
        borderRadius: "16px",
        background:
          "linear-gradient(273.04deg, rgba(228, 220, 242, 0.12) 7.14%, rgba(93, 58, 155, 0.16) 98.66%), linear-gradient(0deg, rgba(102, 80, 143, 0.15), rgba(102, 80, 143, 0.15))",
        boxShadow: "0 4px 32px 0 rgba(162, 89, 247, 0.15)",
      }}
    >
      <Avatar
        size={140}
        src={image}
        pos="absolute"
        left="50%"
        style={{
          transform: "translate(-50%, -30%)",
          boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
        }}
      />
      <Flex
        direction={"column"}
        pt={"120px"}
        align={"center"}
        gap={"sm"}
        px={"40px"}
        pb={"40px"}
      >
        <Flex direction={"column"} align={"center"} gap={"6px"}>
          <Text lh={1.3} size="20px" fw={600}>
            {name}
          </Text>
          <Text fw={500} lh={1.5}>
            {designation}
          </Text>
        </Flex>
        <Text lh={1.5} size="lg" fs={"italic"} ta={"center"}>
          {quote}
        </Text>
      </Flex>
    </Box>
  ));
