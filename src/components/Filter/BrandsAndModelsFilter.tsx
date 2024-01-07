// BrandsAndModelsFilter.tsx
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/Input";
import style from "./filter.module.scss";

interface BrandsAndModelsFilterProps {
  filterData: string[] | undefined;
  selectedItems: string[];
  onInputChange: (value: string) => void;
  onItemChange: (item: string) => void;
  name: string;
}

const BrandsAndModelsFilter: React.FC<BrandsAndModelsFilterProps> = ({
  filterData,
  selectedItems,
  onInputChange,
  onItemChange,
  name,
}) => (
  <div className={style.filterItemWrapper}>
    <span>{name}</span>
    <div className={style.filterItem}>
      <div className={style.brandsInput}>
        <label>
          <FaSearch />
        </label>
        <Input
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="search"
        />
      </div>
      {(filterData && filterData.length > 0 ? filterData : []).map(
        (item, index) => (
          <div key={index + "cb"} className={style.checkbox}>
            <Input
              type="radio"
              name={name}
              checked={selectedItems.includes(item)}
              onChange={() => onItemChange(item)}
            />
            <label>{item}</label>
          </div>
        )
      )}
    </div>
  </div>
);

export default BrandsAndModelsFilter;
