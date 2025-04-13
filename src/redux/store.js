import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        auth: authSlice,
        filters: filtersSlice,
    },
});