import { Avatar, Box, Flex, Text } from "@mantine/core";
import React from "react";
import { OrganizationNavBtn } from "../../_viewModules/OrganizationNavBtn";
import classes from "./index.module.css";
import Image from "next/image";
import { OrganizationType as OrganizationCardPropsType } from "../../types";

export const OrganizationCard = (props: OrganizationCardPropsType) => {
  const { id, name, logoUrl } = props;
  return (
    <Box className={classes.card}>
      <Flex gap={"sm"} justify={"space-between"} align={"center"}>
        <Flex direction={"column"} gap={4}>
          {logoUrl ? (
            <div className="relative w-[47px] h-[40px]">
              <Image
                src={logoUrl}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : (
            <Avatar name={name} size={40} color="white" bg={"gray"} />
          )}
          <Text
            className={classes.label}
            truncate="end"
            maw={"300px"}
            fz={"20px"}
            fw={"600"}
          >
            {name}
          </Text>
        </Flex>
        <OrganizationNavBtn orgId={id} className={classes.icon} />
      </Flex>
    </Box>
  );
};
