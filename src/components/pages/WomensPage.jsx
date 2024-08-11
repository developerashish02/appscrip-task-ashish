import { useSelector } from "react-redux";
import { truncateText } from "../../helpers/helper";
import useWomen from "../../hooks/useWomen";
import Product from "../common/Product";
import Shimmer from "../common/Shimmer";
import useSortedProducts from "../../hooks/useSortedProducts";
import SortSelect from "../common/SortSelect";

const WomensPage = () => {
  useWomen();
  const womensItem = useSelector((store) => store?.products?.womens);

  const { sortedProducts, sortOrder, handleSortChange } =
    useSortedProducts(womensItem);

  if (womensItem?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Womens</h1>
      </header>

      <main className="p-4">
        <div className="container mx-auto">
          <div className="flex justify-end mb-4">
            <SortSelect sortOrder={sortOrder} onSortChange={handleSortChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedProducts?.map((product) => (
              <Product
                product={product}
                key={product?.id}
                truncateText={truncateText}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WomensPage;
