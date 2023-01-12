import { createSlice, current } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact(state, { payload }) {

      state.contacts =  [...state.contacts, payload]
      // return [...current(state.contacts), payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
