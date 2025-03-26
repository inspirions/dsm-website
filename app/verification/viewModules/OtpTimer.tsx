import { useEffect, useState } from "react";

import { Anchor } from "@mantine/core";

const getOtpTime = () => {
  const savedTime = localStorage.getItem("otpTime");
  return savedTime ? Number(savedTime) : 120;
};

export const OtpTimer = () => {
  const [otpTime, setOtpTime] = useState(0);

  useEffect(() => {
    setOtpTime(getOtpTime());
  }, []);

  useEffect(() => {
    if (otpTime === 0) {
      localStorage.removeItem("otpTime");
      return;
    }

    const timer = setTimeout(() => {
      setOtpTime((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("otpTime", String(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [otpTime]);

  return otpTime > 0 ? (
    <p>{otpTime} seconds remaining</p>
  ) : (
    <p>
      OTP expired <Anchor>Resend</Anchor>
    </p>
  );
};
