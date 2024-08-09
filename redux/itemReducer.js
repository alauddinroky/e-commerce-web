import { createSlice } from "@reduxjs/toolkit";
import data from "../src/staticData";
const loadCartFromLocalStorage = () => {
  const serializedCart = localStorage.getItem("cart");
  try {
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("could not get data from local storage");
    return [];
  }
};

const saveDataToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("could not save data to local storage");
  }
};

const itemReducer = createSlice({
  name: "items",
  initialState: {
    items: data,
    cart: loadCartFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      try {
        const exist = state.cart.some((item) => item.id === action.payload.id);
        console.log(exist);
        if (!exist) {
          state.cart = [...state.cart, action.payload];
          saveDataToLocalStorage(state.cart);
        }
      } catch (error) {}
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item, index) => {
        return item.id !== action.payload;
      });
      saveDataToLocalStorage(state.cart);
    },
  },
});
export const { addToCart, removeFromCart } = itemReducer.actions;
export default itemReducer.reducer;
