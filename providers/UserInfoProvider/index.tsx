"use client";

import { createContext, useContext, useMemo } from "react";

import { UserInfoType } from "./types";

const defaultUserInfo = {
  userId: "",
};

export const UserInfoContext = createContext<UserInfoType>(defaultUserInfo);

export const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);

  if (!context) {
    throw new Error(
      "useUserInfoContext must be used within a UserInfoContext.Provider"
    );
  }

  return context;
};

export const UserInfoProvider = ({
  children,
  userInfo,
}: {
  children: React.ReactNode;
  userInfo: { id: string };
}) => {
  const CONTEXT_VALUE = useMemo(() => ({ userId: userInfo?.id }), [userInfo]);

  return (
    <UserInfoContext.Provider value={CONTEXT_VALUE}>
      {children}
    </UserInfoContext.Provider>
  );
};
