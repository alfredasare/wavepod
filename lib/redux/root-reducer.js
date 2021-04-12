import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import playerReducer from './player/player.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['player'],
};

const rootReducer = combineReducers({
	player: playerReducer,
});

export default persistReducer(persistConfig, rootReducer);
