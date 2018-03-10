import React from 'react';
import { mount } from 'enzyme';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  const reviewList = () => {
    return mount(
      <ReviewList />
    );
  };

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
