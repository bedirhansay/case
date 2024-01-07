"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { ProductDTO } from "@/lib/types";
import React from "react";
import style from "./list.module.scss";
import { useContexData } from "@/lib/hook/useContex";

export const ProductListPage = () => {
  const { product } = useContexData();
  const isEmpty = product.length === 0;
  return (
    <div className={style.listWrapper}>
      {isEmpty ? (
        <p className={style.notFound}>No data found that you loking for</p>
      ) : (
        product?.map((item, index) => (
          <ProductCard key={index + "productcard"} {...item} />
        ))
      )}
    </div>
  );
};
