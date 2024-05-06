import { CONTACTS, CREATE_CONTACT } from './types';

export const contactsAction = value => {
  return { type: CONTACTS, payload: value };
};

export const createContactAction = value => {
  return { type: CREATE_CONTACT, payload: value };
};
