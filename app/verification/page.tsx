import { Flex, Card, Text, Center } from "@mantine/core";

import DsmImage from "@/components/DsmImage";
import { NoAccessPage } from "@/components/NoAccessPage";

import { LOGO_URL } from "@/constants/commons";
import { VERIFICATION_PAGE } from "@/constants/dataTestId";

import { VerifyOtpFormView } from "./_viewModules/VerifyOtpFormView";
import { hasOtpCookie } from "./actions";
import Image from "next/image";

const Verification = async () => {
  const hasCookie = await hasOtpCookie();

  if (!hasCookie) {
    return <NoAccessPage />;
  }

  return (
    <Center
      h="100vh"
      bg="#09060FE5"
      c="#F5EFFE"
      data-testid={VERIFICATION_PAGE.ROOT}
    >
      <Card shadow="xl" radius="md" padding="30px 60px" w={500} bg="#2a2437">
        <Flex direction={"column"} gap={"sm"}>
          <Flex justify="center">
            <div
              className="relative w-[100px] h-[40px]"
              data-testid={VERIFICATION_PAGE.LOGO}
            >
              <Image
                src={LOGO_URL}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Flex>
          <Text size="xl" fw={700} ta="center" c="#F5EFFE">
            Verify OTP
          </Text>
          <Text size="sm" c="gray" ta="center">
            Enter the One-Time Password (OTP) sent to your email to verify your
            account.
          </Text>
          <VerifyOtpFormView />
        </Flex>
      </Card>
    </Center>
  );
};

export default Verification;
