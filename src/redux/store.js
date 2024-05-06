import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

// {
//   contacts: [],
//   filter: ""
// }

// const reducer = (state, action) => {
//   if (action.type === 'contacts') return { ...state, contacts: action.payload };
//   else if (action.type === 'filter')
//     return { ...state, filter: action.payload };
//   else return state;
// };

export const store = createStore(rootReducer);

// console.log(store.getState());

// store.dispatch({ type: 'contacts', payload: [123] });
// store.dispatch({ type: 'filter', payload: '123' });

// console.log(store.getState());
