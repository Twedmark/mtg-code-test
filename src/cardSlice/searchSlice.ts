import { createSlice } from "@reduxjs/toolkit";

interface CardState {
  cards: any[];
}

const initialCardsState: CardState = {
  cards: [],
};

const initialSearchState = {
  name: "",
  type: "Creature",
  cost: "",
  image: "",
  desc: "",
  power: "",
  toughness: "",
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState: initialCardsState,
  reducers: {
    addCards: (state, action) => {
      state.cards = [...action.payload];
    },
    resetCards: (state) => {
      state.cards = [];
    },
  },
});

export const searchStore = createSlice({
  name: "searchStore",
  initialState: initialSearchState,
  reducers: {
    setAll: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetSearch: (state) => {
      Object.assign(state, initialSearchState);
    },
  },
});

export const { setAll, resetSearch } = searchStore.actions,
  { addCards, resetCards } = cardsSlice.actions;

export const searchReducer = searchStore.reducer,
  cardsReducer = cardsSlice.reducer;
