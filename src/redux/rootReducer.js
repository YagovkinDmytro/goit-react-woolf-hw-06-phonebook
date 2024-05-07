import { combineReducers } from 'redux';
// import { contactsReducer } from './contacts/reducer';
import { filterContactsReducer } from './filterContacts/reducer';
import { contactsReducer } from './contacts/slice';
import { contactsNameReducer } from './phonebookForm/slice';
// import { contactsReducer } from './contacts/reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterContactsReducer,
  name: contactsNameReducer,
});
