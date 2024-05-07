import { combineReducers } from 'redux';
import { filterContactsReducer } from './filterContacts/reducer';
import { contactsReducer } from './contacts/slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterContactsReducer,
});
