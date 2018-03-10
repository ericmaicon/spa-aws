import { all, fork } from 'redux-saga/effects';

import { fetchReviewsSaga } from 'features/review/review';

const sagas = [
  fetchReviewsSaga
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
};
