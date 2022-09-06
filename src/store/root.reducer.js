import { combineReducers } from 'redux';

import { isLoggedIn } from './authState/authState.reducer';
import { modPlayerPointData } from './botState/botState.reducer';
import { currentViewCount } from './streamState/streamState.reducer';
import { userData } from './authState/authState.reducer';
import { chatSettings } from './botState/botState.reducer';
import { customCommands } from './botState/botState.reducer';
import { currentAutoModSettings } from './botState/botState.reducer';
import { songsData } from './musicState/musicState.reducer'
import { userPlaylists } from './musicState/musicState.reducer'
import { playlistsSongs } from './musicState/musicState.reducer'
import { currentSong } from './musicState/musicState.reducer'
import { blockedTerms } from './botState/botState.reducer';
import { accessToken } from './authState/authState.reducer';
import { twitchVerified } from './authState/authState.reducer';
import { accessExpire } from './authState/authState.reducer';
import { botRunning } from './botState/botState.reducer';
import { streamData } from './streamState/streamState.reducer'



export default combineReducers({
    isLoggedIn, 
    modPlayerPointData,
    currentViewCount,
    userData,
    chatSettings,
    customCommands,
    currentAutoModSettings,
    songsData,
    userPlaylists,
    playlistsSongs,
    currentSong,
    blockedTerms,
    accessToken,
    twitchVerified,
    accessExpire,
    botRunning,
    streamData
});
