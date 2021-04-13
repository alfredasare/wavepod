import { all, call } from 'redux-saga/effects';

import { channelSagas } from './channel/channel.sagas';
import { episodeSagas } from './episode/episode.sagas';

export default function* rootSaga() {
	yield all([call(channelSagas), call(episodeSagas)]);
}
