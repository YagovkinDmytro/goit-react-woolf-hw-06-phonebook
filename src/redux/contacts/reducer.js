import { CONTACTS, CREATE_CONTACT } from './types';

const initialState = { contacts: [] };

export const contactsReducer = (state = initialState, { type, payload }) => {
  if (type === CONTACTS) return { ...state, contacts: payload };
  else if (type === CREATE_CONTACT) return { ...state, contacts: payload };
  else return state;
};
