import { all, fork } from 'redux-saga/effects';

import { fetchReviewsSaga, filterReviewsSaga } from 'features/review/review';

const sagas = [
  fetchReviewsSaga, filterReviewsSaga
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
};
