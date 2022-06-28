import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./features/cocktails/cocktails-slice";
export const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
    },
});
