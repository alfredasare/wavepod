import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getEpisodeFailure, getEpisodeSuccess } from './episode.actions';
import EpisodeTypes from './episode.types';

const baseUrl = 'https://wavepod-backend.vercel.app/api/episode';

function* getEpisode({ payload }) {
	try {
		const episode = yield axios.get(`${baseUrl}/${payload}`);
		yield put(getEpisodeSuccess(episode.data));
	} catch (e) {
		yield put(getEpisodeFailure(e.message));
	}
}

function* onGetEpisodeStart() {
	yield takeLatest(EpisodeTypes.GET_EPISODE_START, getEpisode);
}

export function* episodeSagas() {
	yield all([call(onGetEpisodeStart)]);
}
