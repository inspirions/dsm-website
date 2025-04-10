"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Stepper } from "@mantine/core";

import { DsmCustomIcon } from "@/components/DsmCustomIcon";

import { commons } from "@/constants/commons";

const { IS_SIGNING_UP } = commons;

const getActiveSteps = (index: number) => {
  const steps: Record<string, number> = {
    "/organization": index,
    "/invite-employee": index + 1,
  };
  return steps;
};

const SIGN_UP_STEPS = [
  {
    label: "Sign Up",
    description: "Create an account",
    icon: "user" as const,
    completedIcon: "user" as const,
  },
];

const ORGANIZATION_STEPS = [
  {
    label: "Create Organization",
    description: "Create your Organization",
    icon: "organization" as const,
    completedIcon: "organization" as const,
  },
  {
    label: "Invite Employees",
    description: "Invite your Employees",
    icon: "userGroup" as const,
  },
];

export const OnboardStepper = () => {
  const pathname = usePathname();

  const [isSigningUp, setIsSigningUp] = useState<boolean | null>(null);

  useEffect(() => {
    const value = sessionStorage.getItem(IS_SIGNING_UP);
    setIsSigningUp(value === "true");
  }, []);

  const stepperSteps = isSigningUp
    ? [...SIGN_UP_STEPS, ...ORGANIZATION_STEPS]
    : ORGANIZATION_STEPS;

  return (
    <Stepper
      h={"100%"}
      radius="md"
      iconSize={32}
      orientation="vertical"
      active={getActiveSteps(isSigningUp ? 1 : 0)[pathname]}
    >
      {stepperSteps.map((indvStep) => (
        <Stepper.Step
          label={indvStep.label}
          description={indvStep.description}
          icon={
            indvStep.icon ? <DsmCustomIcon icon={indvStep.icon} /> : undefined
          }
          completedIcon={
            indvStep.completedIcon ? (
              <DsmCustomIcon icon={indvStep.completedIcon} />
            ) : undefined
          }
        />
      ))}
    </Stepper>
  );
};
