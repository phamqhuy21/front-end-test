import React from "react";
import "../styles/ProductsTable.css";

export default function ProductsTable() {
  const columns = [
    "상품번호",
    "상품명",
    "브랜드",
    "상품내용",
    "가격",
    "평점",
    "재고",
  ];
  return (
    <div className="products-table-root">
      <div className="table-container">
        <table>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
}
