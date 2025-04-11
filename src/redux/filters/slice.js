import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectNameFilter } from "./selectors";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;




export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  }
);

export default filtersSlice.reducer;

