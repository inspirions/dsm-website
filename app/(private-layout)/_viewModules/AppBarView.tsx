"use client";

import { useState } from "react";

import { AppShell, lighten } from "@mantine/core";

import { Navbar, NavbarButton } from "@/components/ui/resizable-navbar";

import { handleLogout } from "../actions";

export const AppBarView = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await handleLogout();
    sessionStorage.clear();
    setLoading(false);
  };

  const actionBtn = (
    <NavbarButton
      variant="primary"
      disabled={loading}
      className="bg-[#1A112B] border border-[var(--mantine-color-dsm-light-0)] text-[var(--mantine-color-dsm-light-0)] rounded-[8px]"
      onClick={handleClick}
    >
      Logout
    </NavbarButton>
  );

  return (
    <AppShell
      c="white"
      header={{ height: 20 }}
      bg={lighten("var(--mantine-color-dsm-dark-primary-3)", 0.1)}
    >
      <Navbar actionBtn={actionBtn} hasRootLink={false} />
      <AppShell.Main
        className="w-full"
        style={{ minHeight: "calc(100dvh - 62px)" }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
};
