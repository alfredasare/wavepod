import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import channelReducer from './channel/channel.reducer';
import episodeReducer from './episode/episode.reducer';
import playerReducer from './player/player.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['player', 'search', 'channel'],
};

const rootReducer = combineReducers({
	player: playerReducer,
	channel: channelReducer,
	episode: episodeReducer,
	search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);
