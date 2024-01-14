import { render } from "@testing-library/react";
import { ContextProvider } from "../../context/ContextProvider";

import React, { ReactNode } from "react";
export const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  return <div className="customProvide">{children}</div>;
};

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export const CustomRender = (ui: any, options?: any) => {
  render(ui, { wrapper: AllProviders, ...options });
};
