import React from 'react';
import { mount } from 'enzyme';

import ReviewContainer from './ReviewContainer';

const review = {
};

describe('Review', () => {
  const reviewList = () => {
    return mount(
      <ReviewContainer review={review} />
    );
  };

  it('renders the component', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
