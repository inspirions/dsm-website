import React from "react";
import classes from "./index.module.css";
import { Container, Text } from "@mantine/core";
import { DAILY_SYNC_LOGO_URL } from "@/constants/commons";
import { DsmFormWrapperPropsType } from "./types";

const DsmFormWrapper = (props: DsmFormWrapperPropsType) => {
  const { title, description, formTitle, formView: FormView } = props;
  return (
    <Container
      id="home"
      miw={{
        xl: "100%",
      }}
      p={0}
      className="bg-[#140e21e5] min-h-dvh h-auto"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-4">
        <div className="flex-1 min-h-dvh bg-[#09060F] p-[60px] flex flex-col items-center justify-center">
          <p className="text-[#F5EFFE] text-[36px] font-semibold ">{title}</p>
          <Text className="relative">
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
            <img src={DAILY_SYNC_LOGO_URL} alt="logo" width={105} />
          </div>
          {!!formTitle ? (
            formTitle
          ) : (
            <Text className={classes.secTitle}>
              Your daily partner in{" "}
              <Text span className={classes.highlight} inherit>
                Team productivity
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
