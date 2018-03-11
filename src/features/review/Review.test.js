import React from 'react';
import { mount } from 'enzyme';

import Review from './Review';

const review = {
};

describe('Review', () => {
  const reviewList = () => {
    return mount(
      <Review review={review} />
    );
  };

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
