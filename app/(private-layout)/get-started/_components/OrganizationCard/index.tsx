"use client";

import { Avatar, Box, Flex, Text } from "@mantine/core";
import React from "react";
// import { OrganizationNavBtn } from "../../_viewModules/OrganizationNavBtn";
import classes from "./index.module.css";
import { OrganizationType as OrganizationCardPropsType } from "../../types";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";
import { handleOrganizationNav } from "../../actions";
import { DSM_APP_URL } from "@/constants/commons";
import DsmImage from "@/components/DsmImage";
import { DsmIconButton } from "@/components/DsmIconButton";
import { DsmTooltip } from "@/components/DsmTooltip";

export const OrganizationCard = (props: OrganizationCardPropsType) => {
  const { id, name, logoUrl } = props;
  const handleClick = async () => {
    await handleOrganizationNav(id);
    window.location.href = DSM_APP_URL;
  };
  return (
    <DsmTooltip label={name}>
      <Box className={classes.card} onClick={handleClick}>
        <Flex gap={"sm"} justify={"space-between"} align={"center"}>
          <Flex direction={"column"} gap={4}>
            {!!logoUrl ? (
              <div className="relative w-[47px] h-[40px]">
                <DsmImage
                  src={logoUrl}
                  alt="logo"
                  w={40}
                  h={40}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <Avatar name={name} size={40} color="white" bg={"gray"} />
            )}
            <Text
              className={classes.label}
              truncate="end"
              maw={"200px"}
              fz={"20px"}
              fw={"600"}
            >
              {name}
            </Text>
          </Flex>
          <DsmIconButton
            data-testid={`${GET_STARTED_PAGE.NAV_ORGANIZATION_BTN}-${id}`}
            size={"32px"}
            color="white"
            iconProps={{ icon: "arrowRight", size: 18 }}
            radius={"50%"}
            variant="outline"
            className={classes.icon}
          />
        </Flex>
      </Box>
    </DsmTooltip>
  );
};
