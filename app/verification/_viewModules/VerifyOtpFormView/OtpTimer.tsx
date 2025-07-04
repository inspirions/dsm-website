import { useEffect, useState } from "react";

import { Anchor, Text } from "@mantine/core";

import { commons } from "@/constants/commons";

import { OtpTimerPropsType } from "../../types";

const { OTP_TIME } = commons;

const OTP_TIMER_DURATION = 120;

const getOtpTime = () => {
  const savedTime = localStorage.getItem(OTP_TIME);
  return savedTime ? Number(savedTime) : OTP_TIMER_DURATION;
};

export const OtpTimer = ({ onResend }: OtpTimerPropsType) => {
  const [otpTime, setOtpTime] = useState(OTP_TIMER_DURATION);

  useEffect(() => {
    setOtpTime(getOtpTime());
  }, []);

  useEffect(() => {
    if (otpTime === 0) {
      localStorage.removeItem(OTP_TIME);
      return;
    }

    const timer = setTimeout(() => {
      setOtpTime((prev) => {
        const newTime = prev - 1;
        localStorage.setItem(OTP_TIME, String(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [otpTime]);

  const handleResendClick = () => {
    onResend();
    setOtpTime(OTP_TIMER_DURATION);
  };

  return otpTime ? (
    <Text c="#F5EFFE">{otpTime} seconds remaining</Text>
  ) : (
    <Text c="#F5EFFE">
      Didn't receive OTP?{" "}
      <Anchor
        c={"var(--mantine-color-dsm-primary-5)"}
        fw={"bold"}
        underline="always"
        onClick={handleResendClick}
      >
        Click to resend
      </Anchor>
    </Text>
  );
};
