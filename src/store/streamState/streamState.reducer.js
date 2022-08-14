import * as types from './streamState.types'



export function currentViewCount(state = 0, action) {
  switch (action.type) {
    case types.GET_VIEWER_COUNT:
      return action.payload;
    default:
      return state;
  }
}