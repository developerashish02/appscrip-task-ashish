import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

const useSortedProducts = (products) => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const filters = useSelector((state) => state.sidebar.filters);

  console.log(products, "products");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.keys(filters).every((filterCategory) => {
        const filterValues = filters[filterCategory];
        const productValue = product[filterCategory];

        console.log(`Filter Category: ${filterCategory}`);
        console.log(`Product Value: ${productValue}`);
        console.log(`Filter Values: ${filterValues}`);

        if (filterValues.length === 0) {
          return true;
        }

        if (filterCategory === "category") {
          return filterValues.includes(productValue);
        }

        return true;
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
