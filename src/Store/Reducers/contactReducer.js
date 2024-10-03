// slices/contactSlice.js

import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
