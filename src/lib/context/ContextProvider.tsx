"use client";

import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { cartReducers } from "./reducers/CartReducers";
import { productReducer } from "./reducers/ProductReducer";
import { FilterDTO, ProductDTO } from "../types";
import { callApi } from "../actions/__api.actions";
import { FilterCategoriesReducer } from "./reducers/FilterCategoriesReducer";

export type ContextProps = {
  cart: any[];
  product: ProductDTO[];
  filterCategories: FilterDTO;
  totalPrice: number;
  addProductToCart: (product: any) => void;
  deleteAllCart: () => void;
  decreaseQuantity: (id: number) => void;
  setProduct: (obj: ProductDTO[]) => void;
  setFilterCategories: (obj: any) => void;
};

export const StoreContext = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, cartDispatch] = useReducer(cartReducers, []);
  const [product, productDispatch] = useReducer(productReducer, []);
  const [filterCategories, filterCategoriesDispatch] = useReducer(
    FilterCategoriesReducer,
    []
  );

  const addProductToCart = (obj: any) => {
    cartDispatch({ type: "ADD_TO_CART", payload: obj });
  };

  const decreaseQuantity = (id: number) => {
    cartDispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const deleteAllCart = () => {
    cartDispatch({ type: "CLEAR_CART" });
  };

  const setProduct = (product: ProductDTO[]) => {
    productDispatch({ type: "SET_PRODUCT", payload: product });
  };

  const setFilterCategories = (categories: any) => {
    filterCategoriesDispatch({ type: "SET_CAT", payload: categories });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartData");

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      cartDispatch({ type: "SET_CART", payload: parsedCart });
    }
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total: any, item: any) => total + item.product.price * item.quantity,
      0
    );
  }, [cart]);

  const values = useMemo(() => {
    return {
      cart,
      product,
      totalPrice,
      filterCategories,
      addProductToCart,
      deleteAllCart,
      setProduct,
      decreaseQuantity,
      setFilterCategories,
    };
  }, [cart, product]);

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
