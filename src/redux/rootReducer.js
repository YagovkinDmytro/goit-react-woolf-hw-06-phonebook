import { combineReducers } from 'redux';
import { filterContactsReducer } from './filterContacts/reducer';
import { contactsListReducer } from './contacts/slice';

export const rootReducer = combineReducers({
  contacts: contactsListReducer,
  filter: filterContactsReducer,
});
