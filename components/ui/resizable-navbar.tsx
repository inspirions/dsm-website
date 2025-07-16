"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

import { DsmCustomIcon } from "../DsmCustomIcon";
import { DAILY_SYNC_LOGO_URL } from "@/constants/commons";

interface NavbarProps {
  className?: string;
  navItems?: { name: string; link: string }[];
  loginHref?: string;
  actionBtn?: React.ReactNode;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({
  className,
  navItems,
  actionBtn,
  loginHref = "/login",
}: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-5 z-40 w-full", className)}
    >
      {/* Desktop Navbar */}
      <NavBody visible={visible}>
        <NavbarLogo />
        <NavItems navItems={navItems ? navItems : []} />
        {actionBtn ? (
          actionBtn
        ) : (
          <NavbarButton
            variant="primary"
            className="bg-[#1A112B] border border-[#F5EFFE] text-[#F5EFFE] rounded-[8px]"
            href={loginHref}
          >
            Login
          </NavbarButton>
        )}
      </NavBody>
      {/* Mobile Navbar */}
      <MobileNav visible={visible}>
        <MobileNavHeader className="px-4">
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="bg-linear-to-r from-[rgba(102,80,143,0.9)] to-[rgba(26,17,43,0.75)]"
        >
          <div className="flex flex-col w-full gap-2">
            {navItems?.map((indvNavItem, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={indvNavItem.link}
                className="px-4 py-2 text-black dark:text-white text-lg font-medium rounded hover:bg-neutral-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {indvNavItem.name}
              </a>
            ))}
            {actionBtn ? (
              actionBtn
            ) : (
              <NavbarButton
                variant="primary"
                className="bg-[#1A112B] border border-[#F5EFFE] text-[#F5EFFE] rounded-[8px] mt-2"
                href={loginHref}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </NavbarButton>
            )}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-[1320px] flex-row items-center justify-between self-start rounded-xl bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible &&
          "bg-gradient-to-b from-[rgba(76,46,130,0.15)] to-[rgba(76,46,130,0.15)] bg-[rgba(255,255,255,0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  navItems,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 hover:text-white lg:flex lg:space-x-2",
        className
      )}
    >
      {navItems.map((indvNavItem, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white"
          key={`link-${idx}`}
          href={indvNavItem.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[rgba(76,46,130,0.3)] dark:bg-[rgba(76,46,130,0.4)]"
            />
          )}
          <span className="relative z-20">{indvNavItem.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: "8px",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-8 py-2 lg:hidden",
        visible && "bg-[#4C2E8226] dark:bg-neutral-950/80",
        className
      )}
      style={{
        width: "100vw",
        maxWidth: "100vw",
      }}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <DsmCustomIcon
      icon="x"
      size={24}
      className="text-white dark:text-black"
      onClick={onClick}
    />
  ) : (
    <DsmCustomIcon
      icon="menu2"
      size={24}
      className="text-white dark:text-black"
      onClick={onClick}
    />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image src={DAILY_SYNC_LOGO_URL} alt="logo" width={105} height={38} />
      <span className="text-white font-semibold text-lg">
        Never Out of Sync
      </span>
      {/* <span className="font-medium text-black dark:text-white">Startup</span> */}
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
