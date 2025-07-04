"use client";

import { Box, Flex, Stack, Tabs, Text } from "@mantine/core";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

import DsmImage from "@/components/DsmImage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { HOME_TAB_CONTENT_IMAGE_URL, SCREEN_WIDTH } from "@/constants/commons";

import classes from "./index.module.css";
import { TAB_LISTS } from "../../_constants";
import { useMediaQuery } from "@mantine/hooks";

const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

export const TabContentView = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const tablet = useMediaQuery(SCREEN_WIDTH.TABLET);

  const TAB_CONTENTS = useMemo(
    () =>
      Array.from({ length: TAB_LISTS.length }, (_, index) => ({
        tabValue: index.toString(),
        tabContent: (
          <DsmImage
            h={436}
            w="100%"
            fit="cover"
            radius="8px"
            style={{
              filter: "invert(1)",
              objectPosition: "left",
            }}
            src={HOME_TAB_CONTENT_IMAGE_URL[index]}
          />
        ),
      })),
    []
  );

  useEffect(() => {
    let isMounted = true;
    let lastUpdateTime = 0;
    const UPDATE_INTERVAL = 16;

    const animate = () => {
      if (!isMounted) return;

      const currentTime = Date.now();
      if (currentTime - lastUpdateTime < UPDATE_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastUpdateTime = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      const percent = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);
      setProgress(Math.round(percent));

      if (percent >= 100) {
        setActiveTab((prev) => {
          const nextIndex = (parseInt(prev) + 1) % TAB_LISTS.length;
          return nextIndex.toString();
        });
        startTimeRef.current = Date.now();
        setProgress(0);
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (isMounted) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    startAnimation();

    return () => {
      isMounted = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeTab]);

  const handleTabChange = useCallback((value: string | null) => {
    if (value) {
      setActiveTab(value);
      setProgress(0);
      startTimeRef.current = Date.now();
    }
  }, []);

  const getProgressBarStyle = useCallback(
    (tabValue: string) => {
      const isActive = activeTab === tabValue;
      return {
        height: isActive ? `${progress}%` : "0%",
        transition: isActive ? "height 0.1s linear" : "height 0.2s linear",
      };
    },
    [activeTab, progress]
  );

  const progressBarStyles = useMemo(() => {
    return TAB_LISTS.reduce((acc, { tabValue }) => {
      acc[tabValue] = getProgressBarStyle(tabValue);
      return acc;
    }, {} as Record<string, React.CSSProperties>);
  }, [getProgressBarStyle]);

  return (
    <Tabs
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
          <Box pos={"relative"} w={"100%"} key={tabValue}>
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
                  align={"center"}
                  justify={"center"}
                  bg={"#E4DCF2"}
                  w={40}
                  h={40}
                  style={{ borderRadius: "50%" }}
                >
                  <DsmCustomIcon size={24} icon={tabIcon} color="#5D3A9B" />
                </Flex>
                <Stack gap={0} style={{ width: "100%" }}>
                  <Text fw={600} size={"20px"}>
                    {tabTitle}
                  </Text>
                  <Text maw={"350px"}>{tabDescription}</Text>
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
