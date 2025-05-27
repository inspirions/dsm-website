"use client";

import { useEffect, useRef, useState } from "react";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { Flex, Text } from "@mantine/core";
import { motion, useScroll } from "motion/react";
import { HURDLE_ITEMS } from "../../_constants";

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export const HurdleItemsView = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
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
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {HURDLE_ITEMS.map(({ top, left, title, description }, index) => {
        const baseOffset = 0.1;
        const itemStart = baseOffset + index * 0.08;
        const itemEnd = itemStart + 0.2;
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
              position: "absolute",
              top,
              left,
              pointerEvents: "auto",
            }}
            animate={{
              scale,
              opacity,
            }}
          >
            <Flex direction={"column"}>
              <Flex align={"center"} gap={"xs"}>
                <Flex
                  align={"center"}
                  justify={"center"}
                  bg={"#763BC4"}
                  w={28}
                  h={28}
                  style={{ borderRadius: "50%" }}
                >
                  <DsmCustomIcon size={20} strokeWidth={2} />
                </Flex>
                <Text size={"24px"}>{title}</Text>
              </Flex>
              <Text lh={1.6} maw={"250px"}>
                {description}
              </Text>
            </Flex>
          </motion.div>
        );
      })}
    </div>
  );
};
