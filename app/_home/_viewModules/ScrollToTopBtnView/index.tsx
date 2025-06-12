"use client";

import { DsmIconButton } from "@/components/DsmIconButton";

export const ScrollToTopBtnView = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <DsmIconButton
      size={"xl"}
      bg={"rgba(245, 239, 254, 0.2)"}
      iconProps={{ icon: "arrowUp", size: 20, color: "#F5EFFE" }}
      style={{ borderRadius: "50%", border: "1px solid #A57CED" }}
      onClick={handleClick}
    />
  );
};
