import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { transformChannelResult } from '../../utils/transformResult';
import { getChannelsFailure, getChannelsSuccess } from './channel.actions';
import ChannelTypes from './channel.types';

const baseUrl = 'http://localhost:3001/api/channels';

function* getChannels() {
	try {
		const channels = yield axios.get(baseUrl);
		const transformedChannels = yield call(transformChannelResult, channels);
		yield put(getChannelsSuccess(transformedChannels));
	} catch (e) {
		yield put(getChannelsFailure(e.message));
	}
}

function* onGetChannelsStart() {
	yield takeLatest(ChannelTypes.GET_CHANNELS_START, getChannels);
}

export function* channelSagas() {
	yield all([call(onGetChannelsStart)]);
}
