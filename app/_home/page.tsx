import { Center, Container, Flex, lighten, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmButton } from "@/components/DsmButton";
import { FlipWords } from "@/components/ui/flip-words";
import { Navbar } from "@/components/ui/resizable-navbar";

import { HOME_PAGE_IMAGE_URL, STANDUP_IMAGE_URL } from "@/constants/commons";

import { FooterLayout } from "../../components/FooterLayout";
import { AccordionView } from "./_viewModules/AccordionView";
import { QuoteCardsView } from "./_viewModules/QuoteCardsView";
import { TabContentView } from "./_viewModules/TabContentView";
import { HurdleItemsView } from "./_viewModules/HurdleItemsView";
import { FeatureCardsView } from "./_viewModules/FeatureCardsView";
import { StandupStepsView } from "./_viewModules/StandupStepsView";
import { ScrollToTopBtn } from "../../components/ScrollToTopBtn";

import classes from "./index.module.css";
import Link from "next/link";
import { NAV_ITEMS } from "./_constants";
import SectionDivider from "@/components/SectionDivider";

const HomePage = () => {
  return (
    <Container
      fluid
      c="white"
      className="overflow-hidden"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
    >
      <Navbar className="top-[-12]" navItems={NAV_ITEMS} loginHref="/login" />
      <Container id="home" size="xl" px={0}>
        <Flex pt="144px" direction="column" gap="48px">
          <Flex
            direction="column"
            align="center"
            gap={0}
            style={{ width: "100%" }}
          >
            <Flex justify="center" gap={6} pos="relative" mr={64}>
              <Text ta="center" fz={{ base: 24, sm: 32, md: 48 }} fw="bold">
                See What Your{" "}
              </Text>
              <Text
                span
                ta="center"
                fz={{ base: 24, sm: 32, md: 48 }}
                fw="bold"
              >
                <FlipWords
                  duration={4500}
                  words={["Team", "Project", "Employee"]}
                  className="text-center text-[#F28315] px-0 scale-100 absolute"
                />
              </Text>
            </Flex>
            <Flex justify="center" gap={6} pos="relative" mr={64}>
              <Text ta="center" fz={{ base: 24, sm: 32, md: 48 }} fw="bold">
                Did Last{" "}
              </Text>
              <Text
                span
                ta="center"
                fz={{ base: 24, sm: 32, md: 48 }}
                fw="bold"
              >
                <FlipWords
                  words={["Sunday", "Week", "Month"]}
                  duration={1500}
                  className=" text-center text-[#F28315] px-0 scale-100 absolute"
                />
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="center">
            <Text size="24px" lh={1.5} maw={1137} ta="center">
              Capture, summarize, and gain valuable insights from your daily
              standups — all in one place. Let AI handle the repetitive work, so
              your team can stay focused on what really matters.
            </Text>
          </Flex>
          <Flex justify="center">
            <Link href="/sign-up" style={{ textDecoration: "none" }}>
              <DsmButton
                size="xl"
                px="24px"
                iconProps={{ icon: "ai" }}
                bg="#5D3A9B"
                bd="1px solid #A57CED"
              >
                Get Started
              </DsmButton>
            </Link>
          </Flex>
          <DsmImage
            src={HOME_PAGE_IMAGE_URL}
            w="100%"
            radius={12}
            style={{
              filter: "invert(1)",
            }}
          />
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl">
        <Center h="100%">
          <Flex direction="column" gap="48px" w="100%">
            <Text className={classes.secTitle}>
              Daily{" "}
              <Text span className={classes.highlight} inherit>
                Hurdles
              </Text>{" "}
              That Hold{" "}
              <Text span className={classes.highlight} inherit>
                Teams Back
              </Text>
            </Text>
            <Flex justify="center" pos="relative">
              <DsmImage src={STANDUP_IMAGE_URL} w={620} />
              <HurdleItemsView />
            </Flex>
          </Flex>
        </Center>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl">
        <Flex direction="column" gap="48px">
          <Text className={classes.secTitle}>
            Streamlined{" "}
            <Text span className={classes.highlight} inherit>
              Solutions
            </Text>{" "}
            for Smarter{" "}
            <Text span className={classes.highlight} inherit>
              Teams
            </Text>
          </Text>
          <TabContentView />
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} id="features" size="xl">
        <Flex direction="column" gap="48px">
          <Text className={classes.secTitle}>
            Powerful{" "}
            <Text span className={classes.highlight} inherit>
              Features
            </Text>{" "}
            for Productive{" "}
            <Text span className={classes.highlight} inherit>
              Teams
            </Text>
          </Text>
          <Center>
            <FeatureCardsView />
          </Center>
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl">
        <Flex direction="column" gap="48px">
          <Text className={classes.secTitle}>
            Your{" "}
            <Text span className={classes.highlight} inherit>
              Standup
            </Text>{" "}
            ,Supercharged by{" "}
            <Text span className={classes.highlight} inherit>
              AI
            </Text>
          </Text>
          <Center>
            <StandupStepsView />
          </Center>
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl">
        <Flex direction="column" gap="80px">
          <Text className={classes.secTitle}>
            See{" "}
            <Text span className={classes.highlight} inherit>
              Why
            </Text>{" "}
            Teams{" "}
            <Text span className={classes.highlight} inherit>
              Rely{" "}
            </Text>
            On Us
          </Text>
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            gap={{
              base: 38,
              md: 24,
            }}
          >
            <QuoteCardsView />
          </Flex>
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} id="faq" size="xl">
        <Flex direction="column" gap="48px">
          <Text className={classes.secTitle}>
            Frequently Asked{" "}
            <Text span className={classes.highlight} inherit>
              Questions
            </Text>{" "}
            (FAQs)
          </Text>
          <Center>
            <AccordionView />
          </Center>
        </Flex>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl" pb="48px">
        <Center style={{ flexDirection: "column", gap: "24px" }}>
          <ScrollToTopBtn />
          <Text className={classes.secTitle}>
            Take the{" "}
            <Text span className={classes.highlight} inherit>
              Next Step
            </Text>
          </Text>
          <Link href="/sign-up" style={{ textDecoration: "none" }}>
            <DsmButton
              size="xl"
              px="24px"
              iconProps={{ icon: "chevronRight", position: "right" }}
              styles={{ section: { scale: 1.2 } }}
            >
              Try For Free
            </DsmButton>
          </Link>
        </Center>
      </Container>
      <SectionDivider />
      <Container px={0} size="xl" pb="40px">
        <FooterLayout />
      </Container>
    </Container>
  );
};

export default HomePage;
