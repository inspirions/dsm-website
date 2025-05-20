"use client";

import { useState } from "react";

import { AppShell, Flex, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { LOGOUT_BTN } from "@/constants/dataTestId";

import { handleLogout } from "../actions";

export const AppBarView = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await handleLogout();
    setLoading(false);
  };

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Flex h={"100%"} justify={"space-between"} align={"center"} px={"lg"}>
          <Flex gap={"md"} align={"center"}>
            <DsmImage w={40} h={40} src={LOGO_URL} />
            <Text size="xl" fw={"bold"}>
              DSM
            </Text>
          </Flex>
          <DsmButton
            variant="light"
            loading={loading}
            data-testid={LOGOUT_BTN}
            iconProps={{ icon: "logout" }}
            onClick={handleClick}
          >
            Logout
          </DsmButton>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
