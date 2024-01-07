"use client";

import React, { ReactNode, useState, Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute  h-96  md:h-1/3 inset-0 left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden backdrop-blur-sm z-30 border rounded shadow-lg">
      <div className="absolute top-2 left-2 right-2 p-2  sm:right-20 sm:left-20 sm:top-20  bg-white rounded-lg ">
        <Button className="" variant="secondary" onClick={() => onClose(!open)}>
          &times;
        </Button>
        <div className="p-10"> {children}</div>
      </div>
    </div>
  );
};
