export const filterContactsReducer = (state = { filter: '' }, action) => {
  if (action.type === 'filter') return { ...state, filter: action.payload };
  else return state;
};
