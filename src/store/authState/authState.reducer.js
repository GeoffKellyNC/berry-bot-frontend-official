import * as types from './authState.types';
import { getUserData } from '../../util/localData';






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
      return getUserData();
  }
}

export function accessToken (state = '', action){
  switch(action.type) {
    case types.GET_ACCESS_TOKEN:
      return action.payload;
    default:
      return sessionStorage.getItem('access_token');
  }
}

export function twitchVerified (state = true, action){
  switch(action.type){
    case types.SET_TWITCH_VERIFIED:
      return action.payload
    default:
      return state
  }
}

export function accessExpire (state = 0, action){
  switch(action.type){
    case types.SET_EXPIRE_TIME:
      return action.payload
    default:
      return state
  }
}


