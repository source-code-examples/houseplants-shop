import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array mit Objekten: {id, name, price, image, quantity}
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find((item) => item.id === plant.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += plant.price;
    },

    removeItem(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        existing.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existing.price;

        if (existing.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    deleteItem(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
