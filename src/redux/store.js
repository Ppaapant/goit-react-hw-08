import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import contactSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
export const store = configureStore({
    reducer: {
        contacts: contactSlice,
        auth: authSlice,
        filters: filtersSlice,
    },
});