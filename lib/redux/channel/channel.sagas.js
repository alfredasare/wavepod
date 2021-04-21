import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { transformChannelResult } from '../../utils/transformResult';
import {
	getChannelDetailsFailure,
	getChannelDetailsSuccess,
	getChannelsFailure,
	getChannelsSuccess,
} from './channel.actions';
import ChannelTypes from './channel.types';

const baseUrl = 'https://wavepod-server.herokuapp.com/api/channels';

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

function* getChannelDetails({ payload }) {
	try {
		const channelDetails = yield axios.get(`${baseUrl}/${payload}`);
		yield put(getChannelDetailsSuccess(channelDetails.data));
	} catch (e) {
		yield put(getChannelDetailsFailure(e.message));
	}
}

function* onGetChannelDetailsStart() {
	yield takeLatest(ChannelTypes.GET_CHANNEL_DETAILS_START, getChannelDetails);
}

export function* channelSagas() {
	yield all([call(onGetChannelsStart), call(onGetChannelDetailsStart)]);
}
