import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsList = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContacts: (state, { payload }) => {
      return { ...state, contacts: payload };
    },
    addContact: (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, payload] };
    },
    deleteContact: (state, { payload }) => {
      return { ...state, contacts: [...state.contacts, payload] };
    },
  },
});

export const { createContacts, addContact } = contactsList.actions;
export const contactsReducer = contactsList.reducer;
