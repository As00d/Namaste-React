import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // mutating the state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    popItem: (state) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, popItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
