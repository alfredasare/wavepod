import { all, call } from 'redux-saga/effects';

import { channelSagas } from './channel/channel.sagas';

export default function* rootSaga() {
	yield all([call(channelSagas)]);
}
