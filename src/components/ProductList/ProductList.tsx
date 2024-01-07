import { ProductCard } from "@/components/ui/ProductCard";
import { ProductDTO } from "@/lib/types";
import React from "react";
import style from "./list.module.scss";

export const ProductListPage = ({ products }: { products: ProductDTO[] }) => {
  return (
    <div className={style.listWrapper}>
      {products?.map((item, index) => (
        <ProductCard key={index + "productcard"} {...item} />
      ))}
    </div>
  );
};
