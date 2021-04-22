import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { searchFailure, searchSuccess } from './search.actions';
import SearchTypes from './search.types';

const baseUrl = 'https://wavepod-backend.vercel.app/api/search';
const bearer = `bearer ${process.env.NEXT_PUBLIC_TOKEN}`;

function* search({ payload }) {
	try {
		const response = yield axios.post(
			baseUrl,
			{ query: payload },
			{
				headers: { Authorization: bearer },
			},
		);
		yield put(searchSuccess(response.data));
	} catch (e) {
		yield put(searchFailure(e.message));
	}
}

function* onSearchStart() {
	yield takeLatest(SearchTypes.SEARCH_START, search);
}

export function* searchSagas() {
	yield all([call(onSearchStart)]);
}
