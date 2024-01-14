"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { Button } from "../ui/Button";
import style from "./filter.module.scss";
import { useSize } from "@/lib/hook/useSize";
import SortByRadio from "./SortByRadio";
import BrandsAndModelsFilter from "./BrandsAndModelsFilter";
import { useContexData } from "@/lib/hook/useContex";
import { di } from "react-magnetic-di";

export const Filter = () => {
  di(SortByRadio, BrandsAndModelsFilter);

  const { filterCategories, setFilterCategories } = useContexData();
  const [width] = useSize();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const [order, setOrder] = useState("asc");
  const [searchForBrands, setSearchForBrands] = useState<string>();
  const [searchForModel, setSearchForModel] = useState<string>();
  const [filtered, setFiltered] = useState({
    brands: [],
    models: [],
  });
  const [selectedSort, setSelectedSort] = useState<any>({
    sortBy: searchParams?.get("sortBy"),
    order: searchParams?.get("orderBy"),
  });

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams?.getAll("brand")
  );
  const [selectedModels, setSelectedModels] = useState<string[]>(
    searchParams?.getAll("model")
  );
  const handleSortChange = (label: string, order: string) => {
    let newSort: any = { sortBy: null, order: null };

    switch (label) {
      case "createdAt":
        newSort = { sortBy: "createdAt", order: order };
        setOrder(order);
        break;
      case "price":
        newSort = { sortBy: "price", order: order };
        setOrder(order);
        break;

      default:
        newSort = null;
    }

    setSelectedSort({
      sortBy: newSort.sortBy ? encodeURIComponent(newSort.sortBy) : null,
      order: order,
    });
  };

  const handleBrandsChange = (item: string) => {
    const updatedBrands = toggleSelection(selectedBrands, item);

    // setSelectedBrands(updatedBrands);s
    setSelectedBrands(updatedBrands);
  };

  const handleModelChange = (item: string) => {
    const updatedModels = toggleSelection(selectedModels, item);
    // setSelectedModels(updatedModels);

    //! Api multiple seçeneği desteklemediği için bu durumları satıra alıyorum.
    setSelectedModels(updatedModels);
  };

  const toggleSelection = (list: string[], item: string) => {
    const itemIndex = list.indexOf(item);

    if (itemIndex === -1) {
      // return [...list, item];
      return [item];
    } else {
      // return list.filter((selected, index) => index !== itemIndex);
      return [];
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (selectedSort && selectedSort.sortBy !== null) {
      queryParams.set("sortBy", selectedSort.sortBy);
      queryParams.set("orderBy", selectedSort.order);
    }
    if (selectedModels) {
      for (const query of selectedModels) {
        queryParams.append("model", query);
      }
    }
    if (selectedBrands) {
      for (const query of selectedBrands) {
        queryParams.append("brand", query);
      }
    }

    router.push(`${pathname}?${queryParams.toString()}`);
  }, [selectedModels, selectedBrands, selectedSort]);

  useEffect(() => {
    if (searchForBrands) {
      const filteredBrands = filterCategories?.brands?.filter((brand) =>
        brand.toLowerCase().includes(searchForBrands?.toLowerCase())
      );

      setFiltered((prev: any) => ({
        ...prev,
        brands: [...filteredBrands],
      }));
    }
    if (searchForModel) {
      const filteredModels = filterCategories?.models?.filter((model) =>
        model.toLowerCase().includes(searchForModel?.toLowerCase())
      );

      setFiltered((prev: any) => ({
        ...prev,
        models: [...filteredModels],
      }));
    }
  }, [searchForBrands, searchForModel]);

  return (
    <div data-open={open} className={style.filterWrapper}>
      <div className={style.filterTitle}>
        {width > 768 ? (
          <Button data-testid="larger">
            <h2>Filters</h2>
            <MdFilterList size={24} />
          </Button>
        ) : (
          <Button data-testid="smaller" onClick={() => setOpen(!open)}>
            <h2>Filters</h2>
            {open ? <IoIosClose size={24} /> : <MdFilterList size={24} />}
          </Button>
        )}
      </div>
      <div
        data-testid="filter-area"
        data-open={open}
        className={style.filterArea}
      >
        <SortByRadio
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />
        <BrandsAndModelsFilter
          name="Brands"
          selectedItems={selectedBrands}
          onInputChange={(value) => setSearchForBrands(value)}
          onItemChange={handleBrandsChange}
          filterData={
            Array.isArray(filtered.brands) && filtered.brands.length > 0
              ? filtered.brands
              : filterCategories?.brands
          }
        />
        <BrandsAndModelsFilter
          name="Model"
          selectedItems={selectedModels}
          onInputChange={(value) => setSearchForModel(value)}
          onItemChange={handleModelChange}
          filterData={
            Array.isArray(filtered.models) && filtered.models.length > 0
              ? filtered.models
              : filterCategories?.models
          }
        />
      </div>
    </div>
  );
};
