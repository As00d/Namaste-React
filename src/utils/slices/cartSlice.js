import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state
      // vanilla redux - do not mutate the state and returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // redux toolkit - we have to mutate the state returning is not mandatory and uses Immer JS behind the scene
      state.items.push(action.payload);
    },
    popItem: (state) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      console.log(current(state));
      state.items = action.payload;
      console.log(current(state));
    },
  },
});

export const { addItem, popItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
