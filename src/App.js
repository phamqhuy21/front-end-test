import { useEffect, useState } from "react";
import "./App.css";
import ProductsTable from "./components/ProductsTable";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  const [produtsResult, setProductsResult] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const result = await res.json();
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <SearchAndFilter />
      <ProductsTable />
    </div>
  );
}

export default App;
