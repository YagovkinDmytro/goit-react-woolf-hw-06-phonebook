import { createAction } from '@reduxjs/toolkit';

export const contactsAction = createAction('contacts/getContacts');
export const createContactAction = createAction('contacts/addContacts');
