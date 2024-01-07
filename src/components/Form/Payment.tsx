"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export interface PaymentFormProps {
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ setSuccess }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const cardNumber = formData.get("cardNumber") as string;
    const expiry = formData.get("expiry") as string;
    const cvc = formData.get("cvc") as string;

    if (cardNumber && expiry && cvc) {
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Card Number
        </label>
        <Input
          type="text"
          id="cardNumber"
          required
          name="cardNumber"
          className="w-full"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="expiry"
          className="block text-sm font-medium text-gray-700"
        >
          Expiry (MM/YY)
        </label>
        <Input
          type="text"
          id="expiry"
          name="expiry"
          required
          className="w-full"
          placeholder="MM/YY"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="cvc"
          className="block text-sm font-medium text-gray-700"
        >
          CVC
        </label>
        <Input
          type="text"
          id="cvc"
          name="cvc"
          required
          className="w-full"
          placeholder="123"
        />
      </div>

      <Button
        onClick={() => window.scroll(0, 0)}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Pay Now
      </Button>
    </form>
  );
};

export default PaymentForm;
