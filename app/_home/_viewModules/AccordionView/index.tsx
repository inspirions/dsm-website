"use client";

import { Accordion } from "@mantine/core";

import classes from "./index.module.css";
import { DsmCustomIcon } from "@/components/DsmCustomIcon";
import { FAQS } from "../../_constants";

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
