import { all, fork } from 'redux-saga/effects';

const sagas = [
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
};
