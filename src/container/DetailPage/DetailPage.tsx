"use client";
import React from "react";
import Image from "next/image";
import { ProductDTO } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import style from "./detail.module.scss";
import { useContexData } from "@/lib/hook/useContex";
import toast from "react-hot-toast";

export const DetailPage = ({ singleItem }: { singleItem: ProductDTO }) => {
  const { addProductToCart } = useContexData();
  const handleAddToCart = () => {
    const obj = {
      id: singleItem.id,
      brand: singleItem.brand,
      name: singleItem.name,
      image: singleItem.image,
      price: singleItem.price,
      model: singleItem.model,
    };
    addProductToCart(obj);
    toast.success("Product Successfully Added on cart");
  };

  return (
    <div className={style.detailPageWrapper}>
      <Image
        width={300}
        height={300}
        src={singleItem.image}
        alt={singleItem.name}
      />

      <div className={style.textWrapper}>
        <h1>{singleItem.name}</h1>
        <p>Model: {singleItem.model} Piece</p>

        <p>Currently Stock: {singleItem.brand} Piece</p>
        <strong>Price: {singleItem.price} ₺</strong>

        <p>{singleItem.description}</p>
        <Button variant="ghost" onClick={() => handleAddToCart()}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
