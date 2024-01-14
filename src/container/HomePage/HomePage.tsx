"use client";

import { Filter } from "@/components/Filter/Filter";
import React, { useEffect, useState } from "react";
import { ApiResponse } from "@/lib/types";
import { Pagination } from "@/components/Pagination/Pagination";
import style from "./home.module.scss";
import { ProductListPage } from "@/components/ProductList/ProductList";
import { FaFaceSadTear } from "react-icons/fa6";

import { useContexData } from "@/lib/hook/useContex";

export const HomePage = ({
  products,
  categories,
}: {
  products: ApiResponse;
  categories: any;
}) => {
  const { setProduct, setFilterCategories, product } = useContexData();

  useEffect(() => {
    setProduct((products.data && products.data) || "");
    setFilterCategories(categories);
  }, [products?.data, categories]);

  const isEmpty = product.length === 0;



  return (
    <div className={style.homeWrapper}>
      <Filter />

      {isEmpty ? (
        <p className={style.notFound}>
          Aranan kritere uygun sonuç bulunamadı.
          <FaFaceSadTear size={64} />
        </p>
      ) : (
        <div className="w-full">
          <ProductListPage />
          <Pagination
            totalPage={products.totalPages}
            currentPage={products.currentPage}
          />
        </div>
      )}
    </div>
  );
};
