import React, { useRef, useState } from "react";
import "../styles/FilterAndSearch.css";

const optionsFilter = ["전체", "상품명", "브랜드", "상품내용"];

export default function SearchAndFilter() {
  const inputRef = useRef();
  const [filterValue, setFilterValue] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSelect = (e) => {
    setFilterValue(e.target.value);
  };
  const handleSearch = (e) => {
    setSearchValue(inputRef.current.value || "");
  };

  return (
    <div className="filter-search-container">
      <div className="title-container">
        <p>Products</p>
      </div>
      <div className="form-container">
        <select className="filter-products" onChange={handleChangeSelect}>
          {optionsFilter.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input ref={inputRef} type="text" />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
