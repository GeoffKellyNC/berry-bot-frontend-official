import * as types from './botState.types'




export function modPlayerPointData(state = [], action) {
  switch (action.type) {
    case types.GET_PLAYER_POINT_DATA:
      return action.payload;
    default:
      return state;
  }
}

export function chatSettings(state = {}, action){
  switch (action.type) {
    case types.GET_CHAT_SETTINGS:
      return action.payload;
    default:
      return state;
  }
}

export function customCommands(state = [], action){
  switch (action.type) {
    case types.GET_CUSTOM_COMMANDS:
      return action.payload;
    default:
      return state;
  }
}

export function currentAutoModSettings (state = {}, action){
  switch (action.type) {
    case types.GET_CURRENT_AUTO_MOD_SETTINGS:
      return action.payload;
    default:
      return state;
  }
}

export function botRunning (state = false, action){
  switch(action){
    case types.START_BOT:
      return action.payload
    case types.KILL_BOT:
      return action.payload
    case types.GET_BOT_STATUS:
      return action.payload
    default:
      return state
  }
}

export function blockedTerms (state = [], action){
  switch (action.type) {
    case types.GET_BLOCKED_TERMS:
      return action.payload;
    case types.ADD_BLOCKED_TERM:
      return [...state, action.payload];
    default:
      return state;
  }
}