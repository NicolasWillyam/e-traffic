import React, { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="p-2.5 space-y-2.5">{children}</div>;
};
