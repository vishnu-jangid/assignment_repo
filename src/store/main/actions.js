import * as types from './types';

 function addAction(data) {
  return {
    type: types.ADD,
    payload: data//API.addAction(),
  }
}

export {addAction}