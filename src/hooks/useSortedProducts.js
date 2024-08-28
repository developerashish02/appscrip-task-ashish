import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

const useSortedProducts = (products) => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const filters = useSelector((state) => state.sidebar.filters);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.keys(filters).every((filterCategory) => {
        const filterValues = filters[filterCategory];
        return (
          filterValues.length === 0 ||
          filterValues.includes(product[filterCategory])
        );
      });
    });
  }, [products, filters]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOrder === "highToLow") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }, [filteredProducts, sortOrder]);

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return { sortedProducts, sortOrder, handleSortChange };
};

export default useSortedProducts;
