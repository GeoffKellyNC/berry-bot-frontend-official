import { combineReducers } from 'redux';

import { authUser } from './authState/authState.reducer';
import { isLoggedIn } from './authState/authState.reducer';
import { modPlayerPointData } from './botState/botState.reducer';
import { currentViewCount } from './streamState/streamState.reducer';



export default combineReducers({
    authUser,
    isLoggedIn, 
    modPlayerPointData,
    currentViewCount
});
