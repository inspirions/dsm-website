"use client";

import { AppShell, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL } from "@/constants/commons";
import { DsmButton } from "@/components/DsmButton";
import { handleLogout } from "../actions";

export const AppBarView = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Flex h={"100%"} justify={"space-between"} align={"center"} px={"lg"}>
          <Flex gap={"md"} align={"center"}>
            <DsmImage w={40} h={40} imageUrl={LOGO_URL} />
            <Text size="xl" fw={"bold"}>
              DSM
            </Text>
          </Flex>
          <DsmButton
            variant="light"
            iconProps={{ icon: "logout" }}
            onClick={handleLogout}
          >
            Logout
          </DsmButton>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
