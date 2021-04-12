import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import channelReducer from './channel/channel.reducer';
import playerReducer from './player/player.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['player'],
};

const rootReducer = combineReducers({
	player: playerReducer,
	channel: channelReducer,
});

export default persistReducer(persistConfig, rootReducer);
