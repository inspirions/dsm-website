import Image from "next/image";

import { Container, Text } from "@mantine/core";

import { DAILY_SYNC_LOGO_URL } from "@/constants/commons";

import { DsmFormWrapperPropsType } from "./types";

import classes from "./index.module.css";

const DsmFormWrapper = (props: DsmFormWrapperPropsType) => {
  const { title, description, formTitle, formView: FormView } = props;
  return (
    <Container
      p={0}
      miw={{ xl: "100%" }}
      className="bg-[#160E25] min-h-dvh h-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-4">
        <div className="flex-1 min-h-dvh bg-[var(--mantine-color-dsm-dark-primary-3)] p-[60px] flex flex-col items-center justify-center">
          <p className="text-[var(--mantine-color-dsm-light-0)] text-[36px] font-semibold ">
            {title}
          </p>
          <Text className="relative" size="18px" lh={1.5}>
            <Text
              span
              className={`${classes.quote}  inline-block -scale-y-100 h-10`}
              style={{ color: "var(--mantine-color-dsm-primary-8)" }}
              mr={4}
              size="55px"
            >
              &ldquo;
            </Text>
            {description}
            <Text
              span
              ml={4}
              className={`${classes.quote} absolute bottom-[-22px]`}
              style={{ color: "var(--mantine-color-dsm-orange-6)" }}
              size="55px"
            >
              &rdquo;
            </Text>
          </Text>
        </div>
        <div className="w-full md:w-[50%] h-dvh py-8 px-8 md:px-12 xxl:px-50 flex flex-col items-center justify-center gap-[12px]">
          <div className="flex justify-center">
            <Image
              src={DAILY_SYNC_LOGO_URL}
              alt="logo"
              width={105}
              height={38}
            />
          </div>
          {formTitle ? (
            formTitle
          ) : (
            <Text className={classes.secTitle}>
              Your daily partner in{" "}
              <Text span className={classes.highlight} inherit>
                Team Productivity
              </Text>
            </Text>
          )}
          <FormView />
        </div>
      </div>
    </Container>
  );
};

export default DsmFormWrapper;
