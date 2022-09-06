import * as types from './streamState.types'



export function currentViewCount(state = 0, action) {
  switch (action.type) {
    case types.GET_VIEWER_COUNT:
      return action.payload;
    default:
      return state;
  } 
}

export function streamData(state = {}, action){
  switch (action.type){
    case types.GET_STREAM_DATA:
      return action.payload
    case types.SET_NEW_TITLE:
      return {...state, title: action.payload}
    default:
      return state
  }
}