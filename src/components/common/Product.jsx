import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../features/cartSlice";
import { useLocation } from "react-router-dom";

const Product = ({ product, truncateText }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
      <img
        src={product?.image}
        alt={product?.title}
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold mt-4 line-clamp-2">
          {product?.title}
        </h2>
        <p className="text-gray-700 mt-2 line-clamp-3">
          {truncateText(product.description, 100)}
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-blue-500 font-bold">${product?.price}</p>
        {pathname === "/cart" && (
          <p className="text-blue-500 font-bold">
            Quantity: {product?.quantity}
          </p>
        )}
      </div>

      <div className="flex flex-col items-end mt-4">
        {pathname === "/cart" ? (
          <button
            onClick={() => dispatch(removeItemFromCart(product?.id))}
            type="button"
            className="text-white w-full bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={() => dispatch(addItemToCart(product))}
            type="button"
            className="text-white w-full bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
