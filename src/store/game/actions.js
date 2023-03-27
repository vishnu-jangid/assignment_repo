import * as types from './types';
import {API}  from '../../services/api';

 function gamesAction() {
  return {
    type: types.GAMES,
    payload: API.gamesFetch(),
  }
}

export {gamesAction}