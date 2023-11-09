import { createStore } from 'redux';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return {
        counter: state.counter + 1
      };
    case 'dec':
      if (state.counter > 0) {
        return {
          counter: state.counter - 1
        };
      }
    default:
      return state;
  }
};

export const store = createStore(reducer);
