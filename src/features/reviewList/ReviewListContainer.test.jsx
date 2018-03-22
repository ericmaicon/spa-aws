import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import expect from 'expect';

import ReviewListContainer from './ReviewListContainer';

const mockStore = configureStore([]);
const store = mockStore({
  review: {
    reviews: []
  }
});

describe('ReviewList', () => {
  const reviewList = () => mount(
    <Provider store={store}>
      <ReviewListContainer />
    </Provider>
  );

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
