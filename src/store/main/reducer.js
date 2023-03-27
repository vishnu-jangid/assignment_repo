import * as types from './types';

const initialState = {
  users:[],
  urls: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD: {
      if (action?.payload) {
        let resp = action.payload;
        return {
          ...state,
          users: resp
        };
      } else {
        return { ...state }
      }
    }

    case types.ADD_URL: {
      if (action?.payload) {
        let resp = action.payload;
        return {
          ...state,
          urls: resp
        };
      } else {
        return { ...state }
      }
    }

    default: {
      return { ...state };
    }
  }
};

export default reducer;
