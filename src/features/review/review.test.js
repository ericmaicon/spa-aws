import axios from 'axios';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';

import {
  fetchReviews,
  fetchReviewsSaga,
  filterReviews,
  filterReviewsSaga,
  FETCH_REVIEW,
  FETCH_REVIEW_DONE,
  FILTER_REVIEWS,
  FILTER_REVIEWS_DONE,
  parseReview,
  groupBy
} from './review';

const mock = new MockAdapter(axios);

describe('review', () => {

  it('test fetchReviews', async () => {
    mock.onGet('http://localhost:3333/?page=1').reply(200, []);
    return expectSaga(fetchReviewsSaga)
      .put({
        type: FETCH_REVIEW_DONE,
        response: {
          reviews: []
        },
        payload: {
          type: FETCH_REVIEW,
          page: 1
        }
      })
      .dispatch(fetchReviews())
      .run();
  });

  it('test filterReviews', async () => {
    return expectSaga(filterReviewsSaga)
      .put({
        type: FILTER_REVIEWS_DONE,
        response: {}
      })
      .dispatch(filterReviews())
      .run();
  });

  it('should parse reviews', () => {
    const reviews = [{
      created: 1517389316000
    }];
    const match = [{
      'created': 1517389316000,
      'day': '28.02.50054',
      'daySort': '500540228',
      'formatDate': '25.02.50054',
      'month': 'February',
      'monthSort': '02',
      'week': '22.02 - 28.02',
      'weekSort': '9',
    }];
    expect(parseReview(reviews)).toEqual(match);
  });

  it('should group reviews', () => {
    const reviews = [{
      'created': 1517389316000,
      'day': '28.02.50054',
      'daySort': '500540228',
      'formatDate': '25.02.50054',
      'month': 'February',
      'monthSort': '02',
      'week': '22.02 - 28.02',
      'weekSort': '9',
    }];
    const match = {
      '28.02.50054': [{
        'created': 1517389316000,
        'day': '28.02.50054',
        'daySort': '500540228',
        'formatDate': '25.02.50054',
        'month': 'February',
        'monthSort': '02',
        'week': '22.02 - 28.02',
        'weekSort': '9',
      },
      ]};
    expect(groupBy(reviews, 'day')).toEqual(match);
  });
});
