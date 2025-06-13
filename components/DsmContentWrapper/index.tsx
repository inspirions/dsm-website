import React from "react";

export const DsmContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-[1280px]">{children}</div>;
};
