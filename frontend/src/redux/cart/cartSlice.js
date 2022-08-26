import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = state.cartItems.concat(payload);
      state.totalItems += 1;
      state.amount = payload.product.price * payload.quantity + state.amount;
      toast.success("Product Added To Cart!");
    },
    delCartItem: (state, { payload }) => {
      const find = state.cartItems.find(
        (item) => item.product.id === payload.id
      );
      const filter = state.cartItems.filter((item) => {
        return item.product.id !== payload.id;
      });

      state.amount -= find.quantity * payload.price;
      state.cartItems = filter;
      state.totalItems -= 1;
    },
    increaseItemQuantity: (state, { payload }) => {
      const findItem = state.cartItems.find((item) => item.prod_id === payload);
      findItem.quantity += 1;
      state.amount += findItem.product.price;
    },
    decreaseItemQuantity: (state, { payload }) => {
      const findItem = state.cartItems.find((item) => item.prod_id === payload);
      findItem.quantity -= 1;
      state.amount -= findItem.product.price;
    },
  },
});
export const {
  addToCart,
  delCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
