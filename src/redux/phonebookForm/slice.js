import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const contactsName = createSlice({
  name: 'contactName',
  initialState,
  reducers: {
    setName: ({ payload }) => {
      return { name: payload };
    },
  },
});

export const { setName } = contactsName.actions;
export const contactsNameReducer = contactsName.reducer;
