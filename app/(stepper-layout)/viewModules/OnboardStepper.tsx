"use client";

import { usePathname } from "next/navigation";

import { Stepper } from "@mantine/core";

import { DsmCustomIcon } from "@/components/DsmCustomIcon";

const activeSteps: Record<string, number> = {
  "/organization": 1,
  "/invite-employee": 2,
};

const stepperSteps = [
  {
    label: "Sign Up",
    description: "Create an account",
    completedIcon: "user" as const,
  },
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
  return (
    <Stepper
      h={"100%"}
      radius="md"
      iconSize={32}
      orientation="vertical"
      active={activeSteps[pathname]}
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
