import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export const SuccesBox = () => {
  return (
    <div className="flex my-10 gap-4 flex-col items-center">
      <FaCheckCircle size={32} color="green" />
      <strong className="text-2xl text-center">
        Checkout completed succesfully
      </strong>
      <Link href="/">Continue to shopping</Link>
    </div>
  );
};
