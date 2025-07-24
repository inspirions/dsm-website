"use client";

import { useEffect, useRef, useState } from "react";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { Flex, Text } from "@mantine/core";
import { motion, useScroll } from "motion/react";
import { HURDLE_ITEMS } from "../../_constants";
import { useMediaQuery } from "@mantine/hooks";
import { SCREEN_WIDTH } from "@/constants/commons";

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export const HurdleItemsView = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tablet = useMediaQuery(SCREEN_WIDTH.TABLET);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // scrollYProgress is a MotionValue, so we need to subscribe to it
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (value) => setProgress(value));
  }, [scrollYProgress]);

  return (
    <Flex
      ref={containerRef}
      direction={{
        base: "column",
        row: "row",
      }}
      gap={20}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {HURDLE_ITEMS.map(({ top, left, title, description }, index) => {
        const baseOffset = 0.05;
        const itemStart = baseOffset + index * 0.06;
        const itemEnd = itemStart + 0.15;
        const itemProgress = clamp(
          (progress - itemStart) / (itemEnd - itemStart),
          0,
          1
        );
        const opacity = itemProgress;
        const scale = 0.8 + 0.2 * itemProgress;
        return (
          <motion.div
            key={title}
            style={{
              display: "flex",
              alignItems: "center",
              position: tablet ? "absolute" : "initial",
              top: top,
              left: left,
              pointerEvents: "auto",
              overflow: "hidden",
            }}
            animate={{
              scale,
              opacity,
            }}
          >
            <Flex direction="column">
              <Flex align="center" gap="xs">
                <Flex
                  align="center"
                  justify="center"
                  bg="#763BC4"
                  h={28}
                  w={28}
                  style={{ borderRadius: "50%" }}
                >
                  <DsmCustomIcon size={20} strokeWidth={2} color="white" />
                </Flex>
                <Text
                  fz={{
                    base: 14,
                    md: 24,
                  }}
                >
                  {title}
                </Text>
              </Flex>
              <Text
                lh={1.6}
                maw={{
                  base: "100%",
                  md: 250,
                }}
                fz={{
                  base: 12,
                  md: 17,
                }}
              >
                {description}
              </Text>
            </Flex>
          </motion.div>
        );
      })}
    </Flex>
  );
};
