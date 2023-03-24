import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  cards: any[];
}

const initialState: CounterState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCards: (state, action) => {
      state.cards = [...action.payload];
    },
    reset: (state) => {
      state.cards = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCards, reset } = cardSlice.actions;

export default cardSlice.reducer;
