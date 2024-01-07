"use client";

import { useContexData } from "@/lib/hook/useContex";
import Image from "next/image";
import React, { useState } from "react";
import style from "./checkout.module.scss";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import PaymentForm from "@/components/Form/Payment";
import { SuccesBox } from "@/components/ui/successBox";

export const CheckoutPage = () => {
  const { cart, totalPrice } = useContexData();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={style.checkoutWrapper}>
      <h2>Checkout</h2>

      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.product.id} className={style.box}>
              <div className={style.boxSub}>
                <Image
                  width={200}
                  height={200}
                  src={item.product.image}
                  alt={item.product.name}
                  className="rounded"
                />
              </div>
              <div className={style.textWrapper}>
                <h3>{item.product.name}</h3>
                <p>Brand: {item.product.brand}</p>
                <p>Price: {item.product.price} ₺</p>
              </div>
              <div className={style.text}>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">
                  Total Item Price: {item.quantity * item.product.price} ₺
                </p>
              </div>
            </div>
          ))}

          <div className={style.amount}>
            <p>Total Amount: {totalPrice} ₺</p>
            <Button
              onClick={() => {
                window.scroll(0, 0);
                setOpen(!open);
              }}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Proceed to Payment
            </Button>
          </div>
          <Modal onClose={setOpen} isOpen={open}>
            {success ? <SuccesBox /> : <PaymentForm setSuccess={setSuccess} />}
          </Modal>
        </div>
      ) : (
        <p>Your cart is empty. Add some items to proceed to checkout.</p>
      )}
    </div>
  );
};
