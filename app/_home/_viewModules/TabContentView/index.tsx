"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { useMediaQuery } from "@mantine/hooks";
import { Box, Flex, Stack, Tabs, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { HOME_TAB_CONTENT_IMAGE_URL, SCREEN_WIDTH } from "@/constants/commons";

import { TAB_LISTS } from "../../_constants";
import classes from "./index.module.css";

const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

export const TabContentView = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);
  const tablet = useMediaQuery(SCREEN_WIDTH.TABLET);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 1320) {
      setStart(false);
    } else if (latest >= 3000) {
      setStart(false);
    } else {
      setStart(true);
    }
  });

  const TAB_CONTENTS = useMemo(
    () =>
      Array.from({ length: TAB_LISTS.length }, (_, index) => ({
        tabValue: index.toString(),
        tabContent: (
          <Flex h="100%" justify="center" align="center">
            <Flex w={{ base: 400, sm: 495, md: 680, lg: 941 }}>
              <DsmImage
                width={941}
                height={529}
                alt={`tab-content-${index}`}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                  objectPosition: "center",
                }}
                src={HOME_TAB_CONTENT_IMAGE_URL[index]}
              />
            </Flex>
          </Flex>
        ),
      })),
    []
  );

  // biome-ignore lint: useExhaustiveDependencies
  useEffect(() => {
    if (!start) return;
    const UPDATE_INTERVAL = 500;
    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);
      setProgress(Math.round(percent));

      if (elapsed >= AUTO_SWITCH_INTERVAL) {
        setActiveTab((prev) => {
          const nextIndex = (parseInt(prev) + 1) % TAB_LISTS.length;
          return nextIndex.toString();
        });
        setProgress(0);
        clearInterval(intervalId);
      }
    }, UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [activeTab, start]);

  const handleTabChange = useCallback((value: string | null) => {
    if (value) {
      setActiveTab(value);
      setProgress(0);
    }
  }, []);

  const getProgressBarStyle = useCallback(
    (tabValue: string) => {
      const isActive = activeTab === tabValue;
      return {
        height: isActive ? `${progress}%` : "0%",
        transition: isActive ? "height 0.5s linear" : "height 0.3s linear",
      };
    },
    [activeTab, progress]
  );

  const progressBarStyles = useMemo(() => {
    return TAB_LISTS.reduce(
      (acc, { tabValue }) => {
        acc[tabValue] = getProgressBarStyle(tabValue);
        return acc;
      },
      {} as Record<string, React.CSSProperties>
    );
  }, [getProgressBarStyle]);

  return (
    <Tabs
      ref={ref}
      value={activeTab}
      onChange={handleTabChange}
      orientation={tablet ? "vertical" : "horizontal"}
      classNames={{
        ...classes,
        panel: `${classes.panel} transition-opacity duration-500`,
      }}
    >
      <Tabs.List>
        {TAB_LISTS.map(({ tabValue, tabIcon, tabTitle, tabDescription }) => (
          <Box pos="relative" w="100%" key={tabValue}>
            {/* Animated left progress bar */}
            <div
              className={classes.tabProgress}
              style={progressBarStyles[tabValue]}
            />
            <Tabs.Tab
              value={tabValue}
              className={classes.tab}
              w={{
                base: "100%",
                md: "auto",
              }}
            >
              <Box
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  bg="#E4DCF2"
                  w={40}
                  h={40}
                  style={{ borderRadius: "50%" }}
                >
                  <DsmCustomIcon size={24} icon={tabIcon} color="#5D3A9B" />
                </Flex>
                <Stack gap="8px" w="100%">
                  <Text fw={600} size="20px">
                    {tabTitle}
                  </Text>
                  <Text maw="350px" lh={1.3}>
                    {tabDescription}
                  </Text>
                </Stack>
              </Box>
            </Tabs.Tab>
          </Box>
        ))}
      </Tabs.List>

      {TAB_CONTENTS.map(({ tabValue, tabContent }) => (
        <Tabs.Panel key={tabValue} value={tabValue} mt={{ base: 18, md: 0 }}>
          {tabContent}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
