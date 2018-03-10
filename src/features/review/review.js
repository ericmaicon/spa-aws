import axios from 'axios';
import { take, call, put, select } from 'redux-saga/effects';

export const FETCH_REVIEW = 'review/fetch';
export const FETCH_REVIEW_DONE = `${FETCH_REVIEW}/done`;
export const FETCH_REVIEW_FAIL = `${FETCH_REVIEW}/fail`;

export const GROUP_BY = 'review/groupBy';
export const GROUP_BY_DAY = 'review/groupBy/day';
export const GROUP_BY_WEEK = 'review/groupBy/week';
export const GROUP_BY_MONTH = 'review/groupBy/month';

export const SORT_BY = 'review/sortBy';
export const SORT_BY_DESC = 'review/sortBy/desc';
export const SORT_BY_ASC = 'review/sortBy/asc';

export function reviewReducer(state = { reviews: [], hasMore: false }, action) {
  switch (action.type) {
  case FETCH_REVIEW_DONE:
    return {
      reviews: action.response.reviews,
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
    const currentState = yield select();
    const response = yield call(axios, {
      url: `http://localhost:3333/?page=${action.page}`,
      method: 'GET',
      validateStatus: (status) => status > 0 && status <= 500
    });

    if (response.status >= 200 && response.status < 300) {
      const reviews = currentState.review.reviews.concat(response.data.reviews);

      yield put({
        type: FETCH_REVIEW_DONE,
        response: {
          ...response.data,
          reviews
        },
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
};

export function groupBy(type = GROUP_BY_DAY) {
  return {
    type: GROUP_BY,
    type
  };
};

export function* groupBySaga() {
  while(true) {
    const action = yield take(GROUP_BY);
    const currentState = yield select();

    console.log(currentState.review.reviews);

    switch(action.type) {
    case GROUP_BY_DAY:

    case GROUP_BY_WEEK:

    case GROUP_BY_MONTH:
    }
  }
};
