"use client";

import { Box, Flex, Stack, Tabs, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import DsmImage from "@/components/DsmImage";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { HOME_TAB_CONTENT_IMAGE_URL } from "@/constants/commons";

import classes from "./index.module.css";
import { TAB_LISTS } from "../../_constants";

const TAB_CONTENTS = Array.from({ length: TAB_LISTS.length }, (_, index) => ({
  tabValue: index.toString(),
  tabContent: (
    <DsmImage
      h={489}
      w="100%"
      fit="cover"
      radius="8px"
      src={HOME_TAB_CONTENT_IMAGE_URL[index]}
    />
  ),
}));

const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

export const TabContentView = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    let isMounted = true;
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);
      if (isMounted) setProgress(percent);
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
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      isMounted = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line
  }, [activeTab]);

  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
      setProgress(0);
      startTimeRef.current = Date.now();
    }
  };

  return (
    <Tabs
      value={activeTab}
      onChange={handleTabChange}
      orientation="vertical"
      classNames={{
        ...classes,
        panel: `${classes.panel} transition-opacity duration-500`,
      }}
    >
      <Tabs.List>
        {TAB_LISTS.map(({ tabValue, tabIcon, tabTitle, tabDescription }) => (
          <div style={{ position: "relative" }} key={tabValue}>
            {/* Animated left progress bar */}
            <div
              className={classes.tabProgress}
              style={{
                height: activeTab === tabValue ? `${progress}%` : "0%",
                transition:
                  activeTab === tabValue
                    ? "height 0.1s linear"
                    : "height 0.2s linear",
              }}
            />
            <Tabs.Tab value={tabValue} className={classes.tab}>
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
          </div>
        ))}
      </Tabs.List>

      {TAB_CONTENTS.map(({ tabValue, tabContent }) => (
        <Tabs.Panel key={tabValue} value={tabValue}>
          {tabContent}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
