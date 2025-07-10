"use client";

import { Avatar, Box, Flex, Text } from "@mantine/core";

import { DsmIconButton } from "@/components/DsmIconButton";

import { DSM_APP_URL } from "@/constants/commons";
import { GET_STARTED_PAGE } from "@/constants/dataTestId";

import { handleOrganizationNav } from "../../actions";

import { OrganizationType as OrganizationCardPropsType } from "../../types";

import classes from "./index.module.css";

export const OrganizationCard = (props: OrganizationCardPropsType) => {
  const { id, name, logoUrl } = props;

  const handleClick = async () => {
    await handleOrganizationNav(id);
    window.location.href = DSM_APP_URL;
  };

  return (
    <Box className={classes.card} onClick={handleClick}>
      <Flex gap="sm" justify="space-between" align="center">
        <Flex direction="column" gap={4}>
          <Avatar
            size={40}
            bg="gray"
            color="white"
            alt={name}
            name={name}
            src={logoUrl}
          />
          <Text
            fw="600"
            fz="20px"
            maw="200px"
            truncate="end"
            className={classes.label}
          >
            {name}
          </Text>
        </Flex>
        <DsmIconButton
          size="32px"
          color="white"
          radius="50%"
          variant="outline"
          className={classes.icon}
          iconProps={{ icon: "arrowRight", size: 18 }}
          data-testid={`${GET_STARTED_PAGE.NAV_ORGANIZATION_BTN}-${id}`}
        />
      </Flex>
    </Box>
  );
};
