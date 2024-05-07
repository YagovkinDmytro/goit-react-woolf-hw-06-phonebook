// import { createReducer } from '@reduxjs/toolkit';
// // import { CONTACTS, ADD_CONTACT } from './types';
// import { contactsAction, createContactAction } from './actions';

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// // export const contactsReducer = (state = initialState, { type, payload }) => {
// //   if (type === CONTACTS) return { ...state, contacts: payload };
// //   else if (type === ADD_CONTACT) return { ...state, contacts: payload };
// //   else return state;
// // };

// export const contactsReducer = createReducer(initialState, bilder => {
//   bilder.addCase(contactsAction, (state, { payload }) => {
//     return { ...state, contacts: payload };
//   });
//   bilder.addCase(createContactAction, (state, { payload }) => {
//     return { ...state, contacts: [...state.contacts, payload] };
//   });
// });
