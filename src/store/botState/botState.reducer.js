import * as types from './botState.types'




export function modPlayerPointData(state = [], action) {
  switch (action.type) {
    case types.GET_PLAYER_POINT_DATA:
      return action.payload;
    default:
      return state;
  }
}