import { Center, Container, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmButton } from "@/components/DsmButton";
import { FlipWords } from "@/components/ui/flip-words";
import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

import { HOME_PAGE_IMAGE_URL, STANDUP_IMAGE_URL } from "@/constants/commons";

import { FooterView } from "./_viewModules/FooterView";
import { AccordionView } from "./_viewModules/AccordionView";
import { QuoteCardsView } from "./_viewModules/QuoteCardsView";
import { TabContentView } from "./_viewModules/TabContentView";
import { HurdleItemsView } from "./_viewModules/HurdleItemsView";
import { FeatureCardsView } from "./_viewModules/FeatureCardsView";
import { StandupStepsView } from "./_viewModules/StandupStepsView";
import { ScrollToTopBtnView } from "./_viewModules/ScrollToTopBtnView";

import classes from "./index.module.css";
import Link from "next/link";
import { NAV_ITEMS } from "./_constants";

const HomePage = () => {
  return (
    <Container fluid bg={"#09060FE5"} c={"white"}>
      <Navbar className="top-[-12]">
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} />
          <NavbarButton
            variant="primary"
            className="bg-[#1A112B] border border-[#F5EFFE] text-[#F5EFFE] rounded-[8px]"
            href="/login"
          >
            Login
          </NavbarButton>
        </NavBody>
      </Navbar>
      <Container id="home" mih={"100vh"} size={"xl"}>
        <Flex pt={"144px"} direction={"column"} gap={"48px"}>
          <Text ta={"center"} size="48px" fw={"bold"} component="div">
            See What Your
            <Text span inherit>
              <FlipWords
                duration={4500}
                words={["Team", "Project", "Employee"]}
                className="w-60 text-center text-[#F28315]"
              />
            </Text>
            <Text span inherit>
              Did Last
            </Text>
            <Text span inherit ta={"center"}>
              <FlipWords
                words={["Sunday", "Week", "Month"]}
                duration={1500}
                className="w-60 text-center text-[#F28315]"
              />
            </Text>
          </Text>
          <Flex direction={"column"} align={"center"}>
            <Text size={"24px"} lh={1.5}>
              Capture, summarize, and gain valuable insights from your daily
              standups — all in one place. Let AI handle the
            </Text>
            <Text size={"24px"} lh={1.5}>
              repetitive work, so your team can stay focused on what really
              matters.
            </Text>
          </Flex>
          <Flex justify={"center"}>
            <Link href="/sign-up" style={{ textDecoration: "none" }}>
              <DsmButton
                size="xl"
                px={"24px"}
                iconProps={{ icon: "ai" }}
                bg={"#5D3A9B"}
                bd={"1px solid #A57CED"}
              >
                Get Started
              </DsmButton>
            </Link>
          </Flex>
          <DsmImage src={HOME_PAGE_IMAGE_URL} w={"100%"} />
        </Flex>
      </Container>
      <Container h={"100vh"} size={"xl"}>
        <Center h={"100%"}>
          <Flex direction={"column"} gap={"48px"}>
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
            <Flex justify={"center"} pos={"relative"}>
              <DsmImage src={STANDUP_IMAGE_URL} w={"100%"} />
              <HurdleItemsView />
            </Flex>
          </Flex>
        </Center>
      </Container>
      <Container mih={"100vh"} size={"xl"}>
        <Flex direction={"column"} gap={"48px"}>
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
      <Container id="features" mih={"100vh"} size={"xl"}>
        <Flex direction={"column"} gap={"48px"}>
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
      <Container mih={"100vh"} size={"xl"}>
        <Flex direction={"column"} gap={"48px"}>
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
      <Container mih={"100vh"} size={"xl"}>
        <Flex direction={"column"} gap={"80px"}>
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
          <Center style={{ gap: "24px" }}>
            <QuoteCardsView />
          </Center>
        </Flex>
      </Container>
      <Container id="faq" mih={"100vh"} size={"xl"}>
        <Flex direction={"column"} gap={"48px"}>
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
      <Container size={"xl"} pb={"48px"}>
        <Center style={{ flexDirection: "column", gap: "24px" }}>
          <ScrollToTopBtnView />
          <Text className={classes.secTitle}>
            Take the{" "}
            <Text span className={classes.highlight} inherit>
              Next Step
            </Text>
          </Text>
          <Link href="/sign-up" style={{ textDecoration: "none" }}>
            <DsmButton
              size="xl"
              px={"24px"}
              iconProps={{ icon: "chevronRight", position: "right" }}
              styles={{ section: { scale: 1.2 } }}
            >
              Try For Free
            </DsmButton>
          </Link>
        </Center>
      </Container>
      <Container size={"xl"} pb={"40px"}>
        <FooterView />
      </Container>
    </Container>
  );
};

export default HomePage;
