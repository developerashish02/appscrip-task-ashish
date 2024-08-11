import { useSelector } from "react-redux";
import useAllProducts from "../../hooks/useAllProducts";
import Product from "../common/Product";
import { truncateText } from "../../helpers/helper";
import Shimmer from "../common/Shimmer";
import useSortedProducts from "../../hooks/useSortedProducts";
import SortSelect from "../common/SortSelect";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/sidebarSlice";

const ProductsPage = () => {
  useAllProducts();
  const products = useSelector((store) => store.products?.allProducts);
  const { sortedProducts, sortOrder, handleSortChange } =
    useSortedProducts(products);
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.sidebar.isVisible);

  if (products?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="mb-4">
              <button
                onClick={() => dispatch(toggleSidebar())}
                className="bg-gray-200 text-black p-2 rounded-lg mb-4"
              >
                {isVisible ? "Hide Filters" : "Show Filters"}
              </button>
            </div>

            <div className=" mb-4">
              <SortSelect
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

export default ProductsPage;
