"use client";

import { Accordion } from "@mantine/core";

import classes from "./index.module.css";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";

const FAQS = [
  {
    value: "0",
    title: "What is DailySync.ai?",
    description:
      "DailySync.ai is a smart, AI-powered tool designed to automate your daily standups. It listens, transcribes, and summarizes your team's updates, extracting key action items, blockers, and decisions—so you spend less time note-taking and more time getting things done. It's ideal for teams that want better clarity and alignment without the meeting fatigue.",
  },
  {
    value: "1",
    title: "How does DailySync.ai work?",
    description: "DailySync.ai works in mysterious ways.",
  },
  {
    value: "2",
    title: "Who can benefit from using DailySync.ai?",
    description: "DailySync.ai does not provide benifit to anyone.",
  },
  {
    value: "3",
    title: "What integrations does DailySync.ai support?",
    description: "DailySync.ai does not support any integrations.",
  },
  {
    value: "4",
    title: "Is my data safe with DailySync.ai?",
    description: "DailySync.ai will sell your data to the highest bidder.",
  },
];

export const AccordionView = () => {
  const items = FAQS.map((item) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      style={{
        color: "white",
        background:
          "linear-gradient(82.21deg, rgba(102, 80, 143, 0.25) 3.26%, rgba(26, 17, 43, 0.25) 105.89%)",
      }}
    >
      <Accordion.Control>{item.title}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      chevron={<DsmCustomIcon icon="chevronUp" size={32} strokeWidth={2} />}
      variant="separated"
      defaultValue="0"
      classNames={classes}
    >
      {items}
    </Accordion>
  );
};
