import { Avatar, Box, Flex, Text } from "@mantine/core";

import { QUOTES } from "../../_constants";

export const QuoteCardsView = () =>
  QUOTES.map(({ name, image, quote, designation }) => (
    <Box
      key={name}
      w={{
        base: "100%",
        md: 588,
      }}
      pos={"relative"}
      bd={"1px solid"}
      style={{
        borderRadius: "12px",
        background:
          "linear-gradient(273.04deg, rgba(228, 220, 242, 0.12) 7.14%, rgba(93, 58, 155, 0.16) 98.66%), linear-gradient(0deg, rgba(102, 80, 143, 0.15), rgba(102, 80, 143, 0.15))",
        boxShadow: "0 4px 32px 0 rgba(162, 89, 247, 0.15)",
      }}
    >
      <Avatar
        h={{
          base: 40,
          md: 140,
        }}
        w={{
          base: 40,
          md: 140,
        }}
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
        pt={{ base: 36, md: 120 }}
        align={"center"}
        gap={"sm"}
        px={{ base: 18, md: 40 }}
        pb={{ base: 20, mb: 40 }}
      >
        <Flex direction={"column"} align={"center"} gap={"6px"}>
          <Text lh={1.3} size="20px" fw={600}>
            {name}
          </Text>
          <Text fw={500} lh={1.5} ta={"center"}>
            {designation}
          </Text>
        </Flex>
        <Text lh={1.5} size="lg" fs={"italic"} ta={"center"}>
          {quote}
        </Text>
      </Flex>
    </Box>
  ));
