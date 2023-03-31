import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cardsReducer, searchReducer } from "../cardSlice/searchSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const LocalStore = JSON.parse(localStorage.getItem("reduxState") || "{}");
const initialCardState = {
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

export const store = configureStore({
  preloadedState: {
    searchStore: LocalStore.searchStore
      ? LocalStore.searchStore
      : initialSearchState,
    cardStore: LocalStore.cardStore ? LocalStore.cardStore : initialCardState,
  },
  reducer: {
    searchStore: searchReducer,
    cardStore: cardsReducer,
  },
});

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
