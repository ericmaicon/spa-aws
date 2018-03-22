import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';
import expect from 'expect';

import { SHOW_LOADER, HIDE_LOADER } from 'features/loader/loader';
import {
  fetchReviews,
  fetchReviewsSaga,
  filterReviews,
  filterReviewsSaga,
  FETCH_REVIEW,
  FETCH_REVIEW_DONE,
  FILTER_REVIEWS_DONE,
  parseReview
} from './review';

const mock = new MockAdapter(axios);

describe('review', () => {

  it('test fetchReviews', async () => {
    mock.onGet('http://localhost:3333/?page=1').reply(200, []);
    return expectSaga(fetchReviewsSaga)
      .put({
        type: SHOW_LOADER
      })
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
      .put({
        type: HIDE_LOADER
      })
      .dispatch(fetchReviews())
      .run();
  });

  it('test filterReviews', async () => expectSaga(filterReviewsSaga)
    .put({
      type: FILTER_REVIEWS_DONE,
      response: []
    })
    .dispatch(filterReviews())
    .run()
  );

  it('should parse reviews', () => {
    const reviews = [{
      created: 1517389316000
    }];
    const match = [{
      'created': 1517389316000,
      'formatDate': '31.01.2018',
    }];
    expect(parseReview(reviews)).toEqual(match);
  });
});
