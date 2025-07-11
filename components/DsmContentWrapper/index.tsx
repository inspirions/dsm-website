import React from "react";

export const DsmContentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full md:w=[768px] xl:w-[1280px] h-full">{children}</div>
  );
};
