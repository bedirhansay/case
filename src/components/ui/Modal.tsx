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
    <div className="absolute max-w-7xl mx-auto inset-0  h-full   overflow-hidden backdrop-blur-sm z-30 border rounded shadow-lg">
      <div className="absolute top-20  bottom-20 left-2 right-2 p-2  sm:inset-20 md:inset-52 bg-white rounded-lg ">
        <Button className="" variant="secondary" onClick={() => onClose(!open)}>
          &times;
        </Button>
        <div className="p-10"> {children}</div>
      </div>
    </div>
  );
};
