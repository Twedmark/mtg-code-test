import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardReducer from "../cardSlice/cardSlice";
import counterReducer from "../cardSlice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cardStore: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
