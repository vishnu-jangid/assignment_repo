import * as types from './types';

const initialState = {
  games:[]
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {

    case types.GAMES: {
      if (action?.payload) {
        let games = action.payload
        return {
          ...state,
          games: games
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
