"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/Button";
import style from "./Navbar.module.scss";
import { CiSquarePlus, CiSquareMinus, CiSearch } from "react-icons/ci";
import { Input } from "../ui/Input";
import { useContexData } from "@/lib/hook/useContex";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const {
    cart,
    totalPrice,
    decreaseQuantity,
    addProductToCart,
    deleteAllCart,
  } = useContexData();

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.set("search", search);
    router.push(`${pathname}?${queryParams.toString()}`);
  }, [search]);

  const checkoutHandler = () => {
    if (cart.length === 0) {
      toast.error("Cart is emtpy");
      return;
    }

    toggleCart();
    router.push("/checkout");
  };

  return (
    <div className={style.navWrapper}>
      <div className={style.logo}>
        <Link href="/">Brand New</Link>

        <form className={style.searchBox}>
          <Input
            onBlur={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <label>
            <CiSearch size={20} />
          </label>
        </form>

        <div className={style.right}>
          <div className={style.user}>
            <FaUser /> Bedirhan
          </div>

          <div className={style.cartWrapper}>
            <Button onClick={toggleCart}>
              <FaBagShopping />
              <strong>{totalPrice} ₺</strong>
            </Button>

            {isCartOpen && (
              <div className={style.cart}>
                <strong>Cart details</strong>
                <hr />
                {cart.map((item) => (
                  <div key={item.id} className={style.itemListWrapper}>
                    <div className={style.itemList}>
                      <Image
                        width={50}
                        height={50}
                        src={item.product.image}
                        alt={item.product.name}
                      />

                      <div className={style.textWrapper}>
                        <p className={style.name}>{item.product.name}</p>
                        <p className={style.brand}>{item.product.brand}</p>

                        <div className={style.buttonGroup}>
                          <Button
                            onClick={() => {
                              addProductToCart({ id: item.product.id });
                              toast.success(
                                `${item.product.name} Succesfully incread amount`
                              );
                            }}
                            leftIcon={() => (
                              <CiSquarePlus color="black" size={24} />
                            )}
                          ></Button>
                          <strong className="">{item.quantity}</strong>
                          <Button
                            onClick={() => {
                              decreaseQuantity(item.product.id);
                              toast.success(
                                `${item.product.name} Succesfully decreased amount`
                              );
                            }}
                            leftIcon={() => (
                              <CiSquareMinus color="black" size={24} />
                            )}
                          ></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={style.externalButton}>
                  <Button
                    onClick={() => {
                      deleteAllCart();
                      toggleCart();
                      toast.success(
                        "All Product Successfully Removed from cart"
                      );
                    }}
                    variant="delete"
                  >
                    Clear Cart
                  </Button>
                  <Button
                    onClick={() => {
                      checkoutHandler();
                    }}
                    variant="secondary"
                  >
                    Proceed To Checkout
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <form className={style.searchBoxMobile}>
        <Input
          onBlur={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <label>
          <CiSearch size={20} />
        </label>
      </form>
    </div>
  );
};
