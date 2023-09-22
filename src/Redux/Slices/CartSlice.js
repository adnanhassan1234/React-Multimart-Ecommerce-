import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      console.log("cartItem", state.cartItem);
      console.log("totalAmount", state.totalAmount);
      console.log("totalQuantity", state.totalQuantity);
      console.log("newItem", newItem);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.cartItem.find((item) => item.id === id);

      if (!itemToRemove) {
        return;
      }

      if (itemToRemove.quantity === 1) {
        // If the quantity is 1, remove the entire item from the cart
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
      } else {
        itemToRemove.quantity--;
        itemToRemove.totalPrice -= Number(itemToRemove.price);
      }

      state.totalQuantity--;

      // Recalculate the total amount
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      console.log("cartItem", state.cartItem);
      console.log("totalAmount", state.totalAmount);
      console.log("totalQuantity", state.totalQuantity);
    },
    
    clearCart: (state) => {
      state.cartItem = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
