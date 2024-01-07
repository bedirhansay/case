"use client";

import { useContext } from "react";
import { ContextProps, StoreContext } from "../context/ContextProvider";

export const useContexData = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useContexData hook must be used within a StoreContextProvider"
    );
  }

  return context as ContextProps;
};
