import _ from 'lodash/fp';
import axios from 'axios';
import moment from 'moment';
import { submit } from 'redux-form';
import { take, call, put, select } from 'redux-saga/effects';

export const FETCH_REVIEW = 'review/fetch';
export const FETCH_REVIEW_DONE = `${FETCH_REVIEW}/done`;
export const FETCH_REVIEW_FAIL = `${FETCH_REVIEW}/fail`;

export const FILTER_REVIEWS = 'review/filter';
export const FILTER_REVIEWS_DONE = `${FILTER_REVIEWS}/done`;

export const SORT_BY_DESC = 'desc';
export const SORT_BY_ASC = 'asc';

/**
 * reducer
 **/
export function reviewReducer(state = { parsedReviews: [], reviews: [], hasMore: false }, action) {
  switch (action.type) {
  case FETCH_REVIEW_DONE:
    return {
      ...state,
      reviews: action.response.reviews,
      hasMore: action.response.hasMore,
      page: action.payload.page
    };
    break;
  case FILTER_REVIEWS_DONE:
    return {
      ...state,
      parsedReviews: action.response
    };
  default:
    return state;
  }
}

/**
 * action to fetch reviews
 **/
export function fetchReviews(page = 1) {
  return {
    type: FETCH_REVIEW,
    page
  };
};

/**
 * saga to actually hit the api and treat the result
 **/
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
      const reviewsResponse = parseReview(response.data.reviews);
      const reviews = _.getOr([], 'review.reviews', currentState).concat(reviewsResponse);

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

    yield put(submit('searchForm'));
  }
};

/**
 * action to filter reviews
 **/
export function filterReviews(filter) {
  return {
    type: FILTER_REVIEWS,
    filter
  };
};

/**
 * saga to filter the reviews
 **/
export function* filterReviewsSaga() {
  while(true) {
    const action = yield take(FILTER_REVIEWS);
    const searchObject = Object.assign({}, action.filter);
    const currentState = yield select();
    let reviews = _.getOr([], 'review.reviews', currentState);

    //filter
    if (searchObject.search) {
      reviews = reviews.filter(review => {
        return review.content.toLowerCase().indexOf(searchObject.search.toLowerCase()) > -1 ||
          review.title.toLowerCase().indexOf(searchObject.search.toLowerCase()) > -1;
      });
    }

    //filter rate
    if (searchObject.rate) {
      reviews = reviews.filter(review => {
        return review.stars <= searchObject.rate;
      });
    }

    //order by
    if (searchObject.order_by === SORT_BY_DESC) {
      reviews = reviews.sort((a, b) => {
        return new Date(b.created/1000) - new Date(a.created/1000);
      });
    } else {
      reviews = reviews.sort((a, b) => {
        return new Date(a.created/1000) - new Date(b.created/1000);
      });
    }

    yield put({
      type: FILTER_REVIEWS_DONE,
      response: reviews
    });
  }
};

/**
 * parse review, including new fields to be used on group by
 **/
export function parseReview(reviews) {
  return _.flow(
    _.map(review => {
      const date = moment.unix(review.created/1000);
      return {
        ...review,
        formatDate: date.format('DD.MM.YYYY'),
        day: date.format('DD.MM.YYYY'),
        daySort: date.format('YYYYMMDD'),
      };
    }),
  )(reviews);
}
