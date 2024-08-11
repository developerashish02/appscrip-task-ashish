import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice";
import cartSlice from "../features/cartSlice";
import sidebarReducer from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    sidebar: sidebarReducer,
  },
});

export default store;
