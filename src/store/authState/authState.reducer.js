import * as types from './authState.types';




export function isLoggedIn(state = false, action) {
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return action.payload;
    case types.LOG_OUT:
      return false;
    default:
      return state;
  }
}

export function userData  (state = {}, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return action.payload;
    default:
      return state;
  }
}


