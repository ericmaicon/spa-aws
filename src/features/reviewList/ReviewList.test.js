import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewList from './ReviewList';

const mockStore = configureStore([]);
const store = mockStore({
  review: {
    groupedReviews: {}
  }
});

describe('ReviewList', () => {
  const reviewList = () => {
    return mount(
      <Provider store={store}>
        <ReviewList />
      </Provider>
    );
  };

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
