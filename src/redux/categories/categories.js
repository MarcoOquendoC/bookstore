// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Action creators
export const checkStatus = (payload) => ({ type: CHECK_STATUS, payload });

// initial state
const initialState = 'Under construction';

// Reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default: return state;
  }
};

export default categoryReducer;
