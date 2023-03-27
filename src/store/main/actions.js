import * as types from './types';

 function addAction(data) {
  return {
    type: types.ADD,
    payload: data
  }
}

function addUrlAction(data) {
  return {
    type: types.ADD_URL,
    payload: data
  }
}

export {addAction, addUrlAction}