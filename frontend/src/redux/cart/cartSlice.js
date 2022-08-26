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
      // add item to cart
      state.cartItems = state.cartItems.concat(payload);
      state.totalItems += 1;
      state.amount = payload.product.price * payload.quantity + state.amount;
      toast.success("Product Added To Cart!");
    },
    delCartItem: (state, { payload }) => {
      // del item from cart
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
      // increase cart item quantity
      const findItem = state.cartItems.find((item) => item.prod_id === payload);
      // check if product not found in cart than return it
      if (findItem === undefined) {
        return;
      }
      findItem.quantity += 1;
      state.amount += findItem.product.price;
    },
    decreaseItemQuantity: (state, { payload }) => {
      // decrease cart item quantity
      const findItem = state.cartItems.find((item) => item.prod_id === payload);
      // check if product not found in cart than return it
      if (findItem === undefined) {
        return;
      }
      findItem.quantity -= 1;
      state.amount -= findItem.product.price;
    },
    updateCartItem: (state, { payload }) => {
      const filterItem = state.cartItems.find(
        (item) => item.prod_id === payload.prod_id
      );
      filterItem.quantity = payload.quantity;
      toast.success("Product Updated!");
      filterItem.addons = payload.addons;
      filterItem.softDrinks = payload.softDrinks;
    },
  },
});
export const {
  addToCart,
  delCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  updateCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
