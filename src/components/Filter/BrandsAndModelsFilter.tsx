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
const randomKey = Math.floor(Math.random() * 100);
const BrandsAndModelsFilter: React.FC<BrandsAndModelsFilterProps> = ({
  filterData,
  selectedItems,
  onInputChange,
  onItemChange,
  name,
}) => (
  <div className={style.filterItemWrapper}>
    <h2>{name}</h2>
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
      <div className={style.filterItemSelect}>
        {(filterData && filterData.length > 0 ? filterData : []).map(
          (item, index) => (
            <div key={index + randomKey} className={style.checkbox}>
              <Input
                type="radio"
                id={item + index}
                name={name}
                checked={selectedItems && selectedItems.includes(item)}
                onChange={() => onItemChange(item)}
                onClick={() => onItemChange(item)}
              />
              <label htmlFor={item + index}>{item}</label>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default BrandsAndModelsFilter;
