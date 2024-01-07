"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { Truncate } from "@/lib/utils/truncate";
import { useContexData } from "@/lib/hook/useContex";
import toast from "react-hot-toast";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

export const ProductCard = (props: any) => {
  const { addProductToCart } = useContexData();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteIds = JSON.parse(favorites);

      if (Array.isArray(favoriteIds)) {
        setIsFavorite(favoriteIds.includes(props.id));
      } else {
        setIsFavorite(false);
      }
    } else {
      setIsFavorite(false);
    }
  }, [props.id]);

  const handler = async ({ id, brand, name, image, price }: any) => {
    const obj = {
      id: id,
      name: name,
      brand: brand,
      image: image,
      price: price,
    };

    addProductToCart(obj);

    toast.success("Product Successfully Added on cart");
  };

  const favHandler = (id: string, e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const favorites = localStorage.getItem("favorites");
    let favoriteIds = favorites ? JSON.parse(favorites) : [];

    if (!Array.isArray(favoriteIds)) {
      favoriteIds = [];
    }

    if (favoriteIds.includes(id)) {
      favoriteIds = favoriteIds.filter(
        (favoriteId: string) => favoriteId !== id
      );
      setIsFavorite(false);
      toast.success(`${id} removed from Favorite items`);
    } else {
      favoriteIds.push(id);
      setIsFavorite(true);
      toast.success(`${id} added to Favorite items`);
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  };

  return (
    <div className="border shadow-lg rounded-md overflow-hidden flex flex-col justify-between gap-4 bg-white">
      <Link href={`/product/${props.id}`} className="h-48 relative">
        <Button
          onClick={(e) => favHandler(props.id, e)}
          className="absolute z-10 right-0"
        >
          {isFavorite ? (
            <FaStar color="yellow" size={24} />
          ) : (
            <CiStar color="yellow" size={30} />
          )}
        </Button>
        <Image alt={props.name} fill objectFit="" src={props.image}></Image>
      </Link>

      <div className="flex flex-col px-4 pb-2 gap-4 text-center">
        <strong className="uppercase text-gray-600">
          {Truncate(props.name, 25)}
        </strong>
        <strong>{props.price} ₺</strong>

        <span>{Truncate(props.description, 60)}</span>

        <Button
          data-testid="product-card"
          role="product-card"
          onClick={(e) => {
            handler({
              id: props.id,
              brand: props.brand,
              name: props.name,
              image: props.image,
              price: props.price,
              model: props.model,
            });
          }}
          variant="secondary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
