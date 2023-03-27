import * as types from './types';

const initialState = {
  users:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ADD: {
      if (action?.payload) {
        let resp = action.payload;
//         let allUsers = state.users;
//         allUsers.splice(0, 0, resp);

        return {
          ...state,
          users: resp//allUsers
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
