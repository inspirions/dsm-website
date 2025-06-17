"use client";

import { useState } from "react";

import { AppShell } from "@mantine/core";

import { handleLogout } from "../actions";
import {
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
} from "@/components/ui/resizable-navbar";

export const AppBarView = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await handleLogout();
    setLoading(false);
  };

  return (
    <AppShell header={{ height: 20 }} bg={"#09060FE5"} c={"white"}>
      <Navbar className="top-[-12]">
        <NavBody>
          <NavbarLogo />
          <NavbarButton
            variant="primary"
            className="bg-[#1A112B] border border-[#F5EFFE] text-[#F5EFFE] rounded-[8px]"
            onClick={handleClick}
          >
            Logout
          </NavbarButton>
        </NavBody>
      </Navbar>
      <AppShell.Main
        className="w-full"
        style={{ minHeight: "calc(100dvh - 62px)" }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
