import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../cardSlice/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
