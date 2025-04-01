import { Center, Flex, Text } from "@mantine/core";

import DsmImage from "@/components/DsmImage";

import { LOGO_URL, DSM_IMAGE_URL } from "@/constants/commons";
import { DsmButton } from "@/components/DsmButton";
import Link from "next/link";

const GetStarted = () => {
  return (
    <Flex h="100vh" direction={"column"} gap={"128px"}>
      <Center pt={"xl"}>
        <Flex gap={"sm"} direction={"column"}>
          <Flex gap={"md"} justify={"center"} align={"center"}>
            <DsmImage w={50} h={50} imageUrl={LOGO_URL} />
            <Text size="xl" fw={"bold"}>
              DSM
            </Text>
          </Flex>
          <Flex gap={"md"} align={"center"} justify={"center"}>
            <Flex gap={"sm"} w={"30%"} direction={"column"}>
              <Text size="60px" fw={"bold"}>
                Get started on DSM
              </Text>
              <Text size="xl">
                It's an easy way to manage your daily tasks and stand ups for
                your project and teams. It's faster, better organized, and more
                secure.
              </Text>
              <Flex w={"100%"}>
                <DsmButton hideIcon fullWidth size="lg">
                  <Link href={"/organization"}>Create an Organization</Link>
                </DsmButton>
              </Flex>
            </Flex>
            <DsmImage h={400} w="auto" fit="contain" imageUrl={DSM_IMAGE_URL} />
          </Flex>
        </Flex>
      </Center>
      <Center>
        <Flex direction={"column"} align={"center"} gap={"sm"}>
          <Flex direction={"column"} align={"center"}>
            <Text fw={"bold"} size="xl" c={"gray"}>
              Is your organization already on Dsm?
            </Text>
            <Text c={"gray"}>
              We couldn't find any existing organizations for your account
            </Text>
          </Flex>
          <DsmButton hideIcon variant="outline">
            <Link href={"/login"}>Switch to another account</Link>
          </DsmButton>
        </Flex>
      </Center>
    </Flex>
  );
};

export default GetStarted;
