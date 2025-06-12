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
      mih={"100vh"}
      miw={{
        xl: "100%",
        xxl: "70%",
      }}
      p={0}
      className="bg-[#140e21e5]"
    >
      <div className="flex flex-row justify-center items-center gap-4 h-screen">
        <div className="flex-1 bg-[#09060F] h-full p-[60px]  flex flex-col items-center justify-center">
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
        <div className="w-[60%] px-50 flex flex-col justify-center gap-[12px]">
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
