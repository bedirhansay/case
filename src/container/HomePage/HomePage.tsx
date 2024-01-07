"use client";

import { Filter } from "@/components/Filter/Filter";
import React, { useEffect, useState } from "react";
import { ApiResponse } from "@/lib/types";
import { Pagination } from "@/components/Pagination/Pagination";
import style from "./home.module.scss";
import { ProductListPage } from "@/components/ProductList/ProductList";
import { useContexData } from "@/lib/hook/useContex";
import { usePathname } from "next/navigation";

export const HomePage = ({
  products,
  categories,
}: {
  products: ApiResponse;
  categories: any;
}) => {
  const { setProduct, setFilterCategories } = useContexData();

  useEffect(() => {
    setProduct(products.data);
    setFilterCategories(categories);
  }, [products?.data, categories]);

  return (
    <div className={style.homeWrapper}>
      <Filter />
      <div className="w-full">
        <ProductListPage products={products.data} />
        <Pagination
          totalPage={products.totalPages}
          currentPage={products.currentPage}
        />
      </div>
    </div>
  );
};
