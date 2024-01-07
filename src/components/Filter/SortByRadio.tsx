import React from "react";
import { Input } from "../ui/Input";
import { sortBy } from "@/lib/constant";
import style from "./filter.module.scss";

interface SortByRadioProps {
  selectedSort: any;
  onSortChange: (label: string, order: string) => void;
}

const SortByRadio: React.FC<SortByRadioProps> = ({
  selectedSort,
  onSortChange,
}) => (
  <div className={style.filterItemWrapper}>
    <span>Sort By</span>
    <div className={style.filterItem}>
      {sortBy.map((item) => (
        <div key={item.label} className={style.filterInput}>
          <Input
            type="radio"
            name="sortby"
            checked={
              selectedSort?.sortBy === item.label &&
              selectedSort.order === item.order
            }
            onChange={() => onSortChange(item.label, item.order)}
          />
          <label htmlFor={item.label}>{item.title}</label>
        </div>
      ))}
    </div>
  </div>
);

export default SortByRadio;
