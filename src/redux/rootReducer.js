import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { filterContactsReducer } from './filterContacts/reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterContactsReducer,
});
