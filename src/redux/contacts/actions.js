import { createAction } from '@reduxjs/toolkit';
// import { CONTACTS, ADD_CONTACT } from './types';

// export const contactsAction = value => {
//   return { type: CONTACTS, payload: value };
// };

// export const createContactAction = value => {
//   return { type: ADD_CONTACT, payload: value };
// };
export const contactsAction = createAction('contacts/getContacts');
export const createContactAction = createAction('contacts/addContacts');
