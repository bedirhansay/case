"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import React from "react";
import style from "./list.module.scss";
import { useContexData } from "@/lib/hook/useContex";

export const ProductListPage = () => {
  const { product } = useContexData();

  return (
    <div className={style.listWrapper}>
      {product?.map((item, index) => (
        <ProductCard key={index + "productcard"} {...item} />
      ))}
    </div>
  );
};
