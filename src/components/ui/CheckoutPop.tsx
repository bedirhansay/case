"use client";

import { useContexData } from "@/lib/hook/useContex";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "./Button";
import Link from "next/link";

export const CheckoutPop = () => {
  const { cart } = useContexData();
  return (
    <Link
      href="/checkout"
      className=" bg-gray-900 hover:bg-opacity-50 p-4 md:p-6 rounded-full  fixed bottom-2 md:bottom-20 right-5 md:right-10"
    >
      <strong className="absolute top-4 right-5 text-xs md:text-base bg-white px-1 md:px-2 text-gray-900 rounded-full">
        {cart.length}
      </strong>
      <span className="rounded-full">
        <CiShoppingCart color="white" size={44} />
      </span>
    </Link>
  );
};
