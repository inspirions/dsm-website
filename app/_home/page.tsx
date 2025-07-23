import Link from "next/link";

import { Badge, Center, Container, Flex, lighten, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmButton } from "@/components/DsmButton";
import { FlipWords } from "@/components/ui/flip-words";
import { Navbar } from "@/components/ui/resizable-navbar";

import { HOME_PAGE_IMAGE_URL, STANDUP_IMAGE_URL } from "@/constants/commons";

import { PricingView } from "./_viewModules/PricingView";
import { FooterLayout } from "../../components/FooterLayout";
import { AccordionView } from "./_viewModules/AccordionView";
import { PreFooterView } from "./_viewModules/PreFooterView";
import { QuoteCardsView } from "./_viewModules/QuoteCardsView";
import { TabContentView } from "./_viewModules/TabContentView";
import { HurdleItemsView } from "./_viewModules/HurdleItemsView";
import { FeatureCardsView } from "./_viewModules/FeatureCardsView";
import { StandupStepsView } from "./_viewModules/StandupStepsView";

import { NAV_ITEMS } from "./_constants";

import classes from "./index.module.css";

const HomePage = () => {
  return (
    <Container
      fluid
      c="white"
      className="not-lg:overflow-hidden"
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
    >
      <Navbar navItems={NAV_ITEMS} hasRootLink={false} />
      <Container px={0} size="xl" id="home">
        <Flex
          pt={{ base: 140, sm: 120, lg: 64 }}
          direction="column"
          align="center"
          gap="48px"
          h="100%"
        >
          <Flex direction="column" gap={{ base: 32, sm: 24 }}>
            <Flex direction="column" gap={{ base: 16, sm: 8 }}>
              <Flex
                direction="column"
                align="center"
                gap={0}
                style={{ width: "100%" }}
              >
                <Flex justify="center" gap={2} pos="relative" mr={96}>
                  <Text
                    lh={1.3}
                    ta="center"
                    fz={{ base: 28, sm: 32, md: 48 }}
                    fw="bold"
                  >
                    See How Your{" "}
                  </Text>
                  <Text
                    span
                    ta="center"
                    lh={1.3}
                    fz={{ base: 28, sm: 32, md: 48 }}
                    fw="bold"
                  >
                    <FlipWords
                      duration={4500}
                      words={["Team", "Project", "Employee"]}
                      className="text-center text-[#F28315] scale-100 absolute"
                    />
                  </Text>
                </Flex>
                <Flex justify="center" gap={2} pos="relative" mr={96}>
                  <Text
                    lh={1.3}
                    ta="center"
                    fz={{ base: 28, sm: 32, md: 48 }}
                    fw="bold"
                  >
                    Did Last{" "}
                  </Text>
                  <Text
                    span
                    lh={1.3}
                    ta="center"
                    fz={{ base: 28, sm: 32, md: 48 }}
                    fw="bold"
                  >
                    <FlipWords
                      words={["Sunday", "Week", "Month"]}
                      duration={1500}
                      className=" text-center text-[#F28315] scale-100 absolute"
                    />
                  </Text>
                </Flex>
              </Flex>
              <Text fz={{ base: 18, sm: 24 }} lh={1.3} maw={1137} ta="center">
                Effortlessly keep your remote and hybrid teams aligned with
                asynchronous check-ins and AI-powered summaries, Insights, and
                reports - no matter the time zone.
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
                  Get Started. It's FREE!
                </DsmButton>
              </Link>
            </Flex>
          </Flex>
          <Flex justify="center">
            <DsmImage
              width={600}
              height={600}
              alt="home-page-image"
              src={HOME_PAGE_IMAGE_URL}
              className="w-full rounded-xl"
            />
          </Flex>
        </Flex>
      </Container>
      <Container px={0} size="xl" h="100vh">
        <Flex
          w="100%"
          h="100%"
          gap="96px"
          align="center"
          justify="center"
          direction="column"
        >
          <Flex direction="column">
            <Flex justify="center" pb="md">
              <Badge variant="light">Hurdles</Badge>
            </Flex>
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
          </Flex>
          <Flex justify="center" pos="relative" w="inherit">
            <DsmImage
              width={620}
              height={448}
              className="h-[350px] sm:h-[448px]"
              alt="standup-image"
              src={STANDUP_IMAGE_URL}
            />
            <HurdleItemsView />
          </Flex>
        </Flex>
      </Container>
      <Container px={0} size="xl" mih="100vh">
        <Flex justify="center" pb="md">
          <Badge variant="light">Benefits</Badge>
        </Flex>
        <Flex direction="column" gap="60px" pb={{ base: 32, md: 0 }}>
          <Text className={classes.secTitle}>
            Benefits That Drive{" "}
            <Text span className={classes.highlight} inherit>
              Results
            </Text>
          </Text>
          <TabContentView />
        </Flex>
      </Container>
      <Container px={0} size="xl" mih="100vh" id="features">
        <Flex justify="center" pb="md">
          <Badge variant="light">Features</Badge>
        </Flex>
        <Flex direction="column" gap="60px" pb={{ base: 32, md: 0 }}>
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
          <FeatureCardsView />
        </Flex>
      </Container>
      <Container px={0} size="xl" mih="100vh">
        <Flex justify="center" pb="md">
          <Badge variant="light">Why us</Badge>
        </Flex>
        <Flex direction="column" gap="60px">
          <Flex direction="column" align="center" gap="24px">
            <Text className={classes.secTitle}>
              Why{" "}
              <Text span className={classes.highlight} inherit>
                DailySync.AI?
              </Text>
            </Text>
            <Text
              ta="center"
              fz={{ base: 18, sm: 24 }}
              lh={{ base: 1.3, sm: 1.5 }}
            >
              Say goodbye to the chaos of scattered updates and disconnected
              teams.
            </Text>
          </Flex>
          <Center>
            <StandupStepsView />
          </Center>
        </Flex>
      </Container>
      <Container px={0} size="xl" mih="100vh" pb={{ base: 48, lg: 0 }}>
        <Flex justify="center" pb="md">
          <Badge color="#7d58bc" variant="light">
            Testimonial
          </Badge>
        </Flex>
        <Flex direction="column" gap="60px">
          <Flex direction="column" gap="24px">
            <Text className={classes.secTitle}>
              What Our{" "}
              <Text span className={classes.highlight} inherit>
                Users
              </Text>{" "}
              Say
            </Text>
            <Flex direction="column" gap={{ base: 0, sm: 12 }}>
              <Text
                ta="center"
                fz={{ base: 18, sm: 24 }}
                lh={{ base: 1.3, sm: 1.5 }}
              >
                Thousands of professionals trust DailySync to boost their
                productivity and
              </Text>
              <Text
                ta="center"
                fz={{ base: 18, sm: 24 }}
                lh={{ base: 1.3, sm: 1.5 }}
              >
                achieve their goals.
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 38 }}
            justify="center"
          >
            <QuoteCardsView />
          </Flex>
        </Flex>
      </Container>
      <Container
        px={0}
        size="xl"
        mih="100vh"
        id="pricing"
        pb={{ base: 48, lg: 0 }}
      >
        <Flex justify="center" pb="md">
          <Badge color="#7d58bc" variant="light">
            Pricing
          </Badge>
        </Flex>
        <Flex direction="column" gap="60px">
          <Flex direction="column" gap="24px">
            <Text className={classes.secTitle}>
              Simple, Transparent{" "}
              <Text span className={classes.highlight} inherit>
                Pricing
              </Text>{" "}
            </Text>
            <Text
              ta="center"
              fz={{ base: 18, sm: 24 }}
              lh={{ base: 1.3, sm: 1.5 }}
            >
              All plans include a 3 months free trial.
            </Text>
          </Flex>
          <PricingView />
        </Flex>
      </Container>
      <Container px={0} size="xl" mih="100vh" id="faq">
        <Flex justify="center" pb="md">
          <Badge color="#7d58bc" variant="light">
            FAQ
          </Badge>
        </Flex>
        <Flex direction="column" gap="60px">
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
      <Container px={0} size="xl" pb="48px">
        <Center>
          <Flex py="96px" w="100%">
            <PreFooterView />
          </Flex>
        </Center>
      </Container>
      <Container px={0} size="xl">
        <FooterLayout />
      </Container>
    </Container>
  );
};

export default HomePage;
