import { combineReducers } from 'redux';

import { isLoggedIn } from './authState/authState.reducer';
import { modPlayerPointData } from './botState/botState.reducer';
import { currentViewCount } from './streamState/streamState.reducer';
import { userData } from './authState/authState.reducer';



export default combineReducers({
    isLoggedIn, 
    modPlayerPointData,
    currentViewCount,
    userData
});
