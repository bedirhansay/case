"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { LoaderIcon } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useContexData } from "@/lib/hook/useContex";

export const SuccesBox = () => {
  const [loading, setLoading] = useState(true);

  const { deleteAllCart } = useContexData();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const redirectTimeout = setTimeout(() => {
      deleteAllCart();
      window.location.href = "/";
    }, 3000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="flex my-10 gap-4 flex-col items-center">
      {!loading ? (
        <>
          <FaCheckCircle size={32} color="green" />
          <strong className="text-2xl text-center">
            Checkout completed successfully
          </strong>
          <Link href="/">Continue to shopping</Link>
        </>
      ) : (
        <>
          <LoaderIcon />
          <strong>Process is completing...</strong>
        </>
      )}
    </div>
  );
};
