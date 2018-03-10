import axios from 'axios';
import { take, call, put, select } from 'redux-saga/effects';

export const FETCH_REVIEW = 'reducer/fetch';
export const FETCH_REVIEW_DONE = `${FETCH_REVIEW}/done`;
export const FETCH_REVIEW_FAIL = `${FETCH_REVIEW}/fail`;

export function reviewReducer(state = { reviews: [], hasMore: false }, action) {
  switch (action.type) {
  case FETCH_REVIEW_DONE:
    return {
      reviews: state.reviews.concat(action.response.reviews),
      hasMore: action.response.hasMore,
      page: action.payload.page
    };
    break;
  default:
    return state;
  }
}

export function fetchReviews(page = 1) {
  return {
    type: FETCH_REVIEW,
    page
  };
};

export function* fetchReviewsSaga() {
  while(true) {
    const action = yield take(FETCH_REVIEW);
    const response = yield call(axios, {
      url: `http://localhost:3333/?page=${action.page}`,
      method: 'GET',
      validateStatus: (status) => status > 0 && status <= 500
    });

    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: FETCH_REVIEW_DONE,
        response: response.data,
        payload: action
      });
    } else {
      yield put({
        type: FETCH_REVIEW_FAIL,
        response,
        payload: action
      });
    }
  }
}
